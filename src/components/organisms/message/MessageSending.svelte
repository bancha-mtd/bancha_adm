<script lang="ts">
	import CheckButton from "../../atoms/buttons/CheckButton.svelte";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import GreyTextButton from "../../atoms/buttons/GreyTextButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import SpaceBetweenCol from "../../atoms/layouts/SpaceBetweenCol.svelte";
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";

	const send: () => void = () => {};
	const reset: () => void = () => {
		messageContent = "";
		messageTitle = "";
	};
	const searchPhone: () => void = () => {};
	const getBytes = (str) => {
		let character: string;
		let charBytes = 0;

		for (let i = 0; i < str.length; i += 1) {
			character = str.charAt(i);

			if (escape(character).length > 4) charBytes += 2;
			else charBytes += 1;
		}

		return charBytes;
	};
	const resetReceivers = () => {
		receivers = [];
		reciverSelected = [];
		receiverCnt = 0;
	};
	const addReceiver = () => {};
	const removeReceiver = () => {};

	let isSMS: boolean = true;
	let messageTitle: string = "";
	let messageContent: string = "";
	let messageByte: number = 0;
	let receiverPhone: string = "";
	let queryPhone: string = "";
	let receiverCnt: number = 0;
	let receivers: any[] = [];
	let reciverSelected: boolean[] = [];
	let queryNickname: string = "";
	let searchResults: any[] = [];
	let searchSelected: boolean[] = [];

	$: messageByte = getBytes(messageContent);
</script>

<DetailPanelLayout height="calc(100vh - 140px)">
	<SpaceAround width="100%" gap="50px" marginTop="50px">
		<div class="frame">
			<SpaceBetween>
				<button
					class="tab"
					on:click={() => {
						isSMS = true;
					}}
				>
					SMS(단문)
				</button>
				<button
					class="tab"
					on:click={() => {
						isSMS = false;
					}}
				>
					LMS(장문)
				</button>
			</SpaceBetween>
			<SpaceBetweenCol gap="2px">
				<BorderedInput bind:value={messageTitle} width="340px" />
				<BorderedTextArea
					bind:value={messageContent}
					width="340px"
					height="350px"
				/>
				<SpaceAround width="100%">
					<GreyTextButton width="auto" height="50px" padding="0" onClick={reset}
						>↻ 다시쓰기</GreyTextButton
					>
					{#if isSMS}
						<GreyText>{messageByte} / 90 Byte</GreyText>
					{/if}
				</SpaceAround>
			</SpaceBetweenCol>
			<div class="bordered receiver-info">
				<SpaceAround width="100%">
					<DarkGreyText>수신번호</DarkGreyText>
					<BorderedInput bind:value={receiverPhone} />
				</SpaceAround>
				<SpaceAround width="100%">
					<DarkGreyText>발신번호</DarkGreyText>
					<DarkGreyText width="150px">044-715-7610</DarkGreyText>
				</SpaceAround>
			</div>
			<GreyBackgroundButton width="340px" onClick={send}
				>발송하기</GreyBackgroundButton
			>
		</div>

		<SpaceAround width="50%">
			<div class="receivers">
				<SpaceBetweenCol>
					<SpaceBetween width="340px">
						<BorderedInput
							width="250px"
							height="50px"
							bind:value={queryPhone}
						/>
						<GreyBackgroundButton
							width="70px"
							height="50px"
							onClick={searchPhone}>추가</GreyBackgroundButton
						>
					</SpaceBetween>
				</SpaceBetweenCol>
				<div class="bordered padding-top-10">
					<DarkGreyText>전체 발송 수: {receiverCnt}명</DarkGreyText>
					<ul class="receiver-list">
						{#if receiverCnt === 0}
							<DarkGreyText>없음</DarkGreyText>
						{:else}
							{#each receivers as element, idx}
								<li class="receiver-list-item">
									<CheckButton
										selected={reciverSelected[idx]}
										onClick={() => {
											reciverSelected[idx] = true;
										}}
									/>
									<DarkGreyText>{element.nickname}</DarkGreyText>
									<DarkGreyText>{element.phone}</DarkGreyText>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
				<div class="align-right">
					<GreyBackgroundButton
						width="90px"
						height="40px"
						fontSize="16px"
						onClick={resetReceivers}>전체 삭제</GreyBackgroundButton
					>
				</div>
			</div>

			<SpaceBetweenCol height="150px">
				<GreyBackgroundButton onClick={addReceiver} width="64px" height="64px">
					◀<br />추가</GreyBackgroundButton
				>
				<GreyBackgroundButton
					onClick={removeReceiver}
					width="64px"
					height="64px"
				>
					▶<br />삭제</GreyBackgroundButton
				>
			</SpaceBetweenCol>

			<div class="receivers shorter">
				<SpaceBetweenCol>
					<SpaceBetween width="340px">
						<BorderedInput
							width="250px"
							height="50px"
							bind:value={queryPhone}
						/>
						<GreyBackgroundButton
							width="70px"
							height="50px"
							onClick={searchPhone}>추가</GreyBackgroundButton
						>
					</SpaceBetween>
				</SpaceBetweenCol>
				<div class="bordered padding-top-10">
					<SpaceAround width="100%">
						<CheckButton
							onClick={() => {
								for (let i = 0; i < searchResults.length; i++) {
									searchSelected[i] = true;
								}
							}}
						/>
						<DarkGreyText>닉네임</DarkGreyText>
						<DarkGreyText>번호</DarkGreyText>
					</SpaceAround>
					<ul class="receiver-list">
						{#if receiverCnt === 0}
							<DarkGreyText>없음</DarkGreyText>
						{:else}
							{#each receivers as element, idx}
								<li class="receiver-list-item">
									<CheckButton
										selected={reciverSelected[idx]}
										onClick={() => {
											reciverSelected[idx] = true;
										}}
									/>
									<DarkGreyText>{element.nickname}</DarkGreyText>
									<DarkGreyText>{element.phone}</DarkGreyText>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
			</div>
		</SpaceAround>
	</SpaceAround>
</DetailPanelLayout>

<style>
	.frame {
		height: 700px;
		border: 3px solid #aaa;
		padding: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.tab {
		width: 168px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		border-radius: 10px 10px 0 0;
		background-color: #aaa;
		color: white;
	}
	.bordered {
		border: 1px solid #aaa;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.padding-top-10 {
		padding-top: 10px;
	}
	.receivers {
		height: 700px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.receiver-info {
		height: 70px;
	}
	.receiver-list {
		padding: 0;
		margin-top: 10px;
		margin-bottom: 10px;
		height: 530px;
		border-top: 1px solid #aaa;
	}
	.receiver-list-item {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 40px;
	}
	.align-right {
		text-align: right;
	}
	.shorter {
		justify-content: start;
		gap: 10px;
	}
</style>
