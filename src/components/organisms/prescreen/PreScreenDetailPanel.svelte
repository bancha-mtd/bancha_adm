<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Image from "../../atoms/images/Image.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DropZone from "./DropZone.svelte";

	export let selected: object = { id: -1, title: "", contents: "" };
	let file: Blob;
	let frm = new FormData();

	let addPreScreen = () => {
		console.log(selected);
		// frm.append('')
	};
	let deletePreScreen = () => {
		console.log(selected);
	};
	let reset = () => {
		selected = { id: -1, title: "", contents: "" };
	};
</script>

<div class="panel">
	<div class="paneltitle">
		<BoldText fontSize="18px">프리스크린 상세</BoldText>
		<SpaceBetween gap="10px">
			<GreyBackgroundButton
				onClick={addPreScreen}
				width="50px"
				height="30px"
				fontSize="16px"
				>{selected.id < 0 ? "등록" : "수정"}
			</GreyBackgroundButton>
			<GreyBackgroundButton
				onClick={deletePreScreen}
				width="50px"
				height="30px"
				fontSize="16px"
				>삭제
			</GreyBackgroundButton>
			<GreyBackgroundButton
				onClick={reset}
				width="50px"
				height="30px"
				fontSize="16px"
				>취소
			</GreyBackgroundButton>
		</SpaceBetween>
	</div>
	<div class="title">
		<BoldText fontSize="18px">프리스크린 이름</BoldText>
		<BorderedInput
			width="100%"
			height="30px"
			bind:value={selected.title}
			placeholder=""
		/>
	</div>
	<BoldText fontSize="18px">이미지</BoldText>
	<div class="images">
		{#if selected.id === -1}
			<DropZone
				bind:file
				bind:img={selected.contents}
				onEnd={() => {
					selected.id = -2;
				}}
			/>
		{:else if selected.id === -2}
			<Image
				width="100%"
				height="100%"
				src={selected.contents}
				objectFit="contain"
			/>
		{:else}
			<Image
				width="100%"
				height="100%"
				src={selected.contents}
				objectFit="contain"
			/>
		{/if}
	</div>
</div>

<style>
	.panel {
		width: calc(25% - 20px);
		height: 80vh;
		padding: 20px;
		background-color: white;
		border-radius: 10px;
	}
	.paneltitle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.title {
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.images {
		width: 100%;
		height: 70%;
		margin-top: 20px;
		text-align: center;
	}
</style>
