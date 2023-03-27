<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DesignedDetailLayout from "../../layouts/DesignedDetailLayout.svelte";
	import GreyBgTitledRow from "../../molecules/detail/GreyBgTitledRow.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import Flex from "../../atoms/layouts/Flex.svelte";
	import SpaceBetweenCol from "../../atoms/layouts/SpaceBetweenCol.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import YellowBackgroundButton from "../../atoms/buttons/YellowBackgroundButton.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import ChildDetail from "./ChildDetail.svelte";

	export let itemId: string;

	let memberGrade = [
		{ id: 1, name: "VIP", value: 1 },
		{ id: 2, name: "반차 절친", value: 2 },
		{ id: 3, name: "반차 친구", value: 3 },
	];
	let item = {
		id: itemId,
		agreePush: true,
		agreeSms: false,
		agreePushAfter9: true,
		agreeEmail: false,
		email: "",
		authEmail: true,
		nickname: "",
		phone: "",
		authPhone: true,
		grade: memberGrade[0],
		address: "",
		birth: "",
		reviews: 0,
		purchases: 0,
		purchasePrice: 0,
		registerDate: "",
		lastLogin: "",
		point: 0,
	};
	let children = [
		{
			id: 1,
			birth: "2022-12-12",
			sex: true,
			interest: "하늘",
			mbti: "INTJ",
		},
	];

	const modifyItem = () => {
		console.log(item);
		return;
	};
</script>

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">회원정보</BoldText>
	<GreyBackgroundButton
		onClick={modifyItem}
		width="60px"
		height="30px"
		fontSize="16px">수정</GreyBackgroundButton
	>
</SpaceBetween>
<DesignedDetailLayout>
	<Flex>
		<GreyBgTitledRow title="회원번호">
			<Text fontSize="16px">{itemId}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="알림동의" width="calc(200%/3)">
			<SpaceBetween width="calc(100% - 190px)">
				<SpaceBetweenCol width="40%" gap="10px">
					<SpaceBetween>
						<Text fontSize="16px">앱 푸시 알림</Text>
						{#if item.agreePush}
							<YellowBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">동의</YellowBackgroundButton
							>
						{:else}
							<GreyBackgroundButton onClick={() => {}}
								>미동의</GreyBackgroundButton
							>
						{/if}
					</SpaceBetween>
					<SpaceBetween>
						<Text fontSize="16px">문자메시지 발송</Text>
						{#if item.agreeSms}
							<YellowBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">동의</YellowBackgroundButton
							>
						{:else}
							<GreyBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">미동의</GreyBackgroundButton
							>
						{/if}
					</SpaceBetween>
				</SpaceBetweenCol>
				<SpaceBetweenCol width="40%" gap="10px">
					<SpaceBetween>
						<Text fontSize="16px">9시 이후 푸시 알림</Text>
						{#if item.agreePushAfter9}
							<YellowBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">동의</YellowBackgroundButton
							>
						{:else}
							<GreyBackgroundButton onClick={() => {}}
								>미동의</GreyBackgroundButton
							>
						{/if}
					</SpaceBetween>
					<SpaceBetween>
						<Text fontSize="16px">이메일 발송</Text>
						{#if item.agreeEmail}
							<YellowBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">동의</YellowBackgroundButton
							>
						{:else}
							<GreyBackgroundButton
								onClick={() => {}}
								width="80px"
								height="30px"
								fontSize="16px">미동의</GreyBackgroundButton
							>
						{/if}
					</SpaceBetween>
				</SpaceBetweenCol>
			</SpaceBetween>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="이메일">
			<SpaceBetween width="calc(100% - 190px)">
				<Text fontSize="16px">{item.email}</Text>
				{#if item.authEmail}
					<YellowBackgroundButton
						onClick={() => {}}
						width="80px"
						height="30px"
						fontSize="16px">동의</YellowBackgroundButton
					>
				{:else}
					<GreyBackgroundButton
						onClick={() => {}}
						width="80px"
						height="30px"
						fontSize="16px">미동의</GreyBackgroundButton
					>
				{/if}
			</SpaceBetween>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="닉네임">
			<Text fontSize="16px">{item.nickname}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="전화번호">
			<SpaceBetween width="calc(100% - 190px)">
				<Text fontSize="16px">{item.phone}</Text>
				{#if item.authPhone}
					<YellowBackgroundButton
						onClick={() => {}}
						width="80px"
						height="30px"
						fontSize="16px">동의</YellowBackgroundButton
					>
				{:else}
					<GreyBackgroundButton
						onClick={() => {}}
						width="80px"
						height="30px"
						fontSize="16px">미동의</GreyBackgroundButton
					>
				{/if}
			</SpaceBetween>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="등급">
			<Select
				lists={memberGrade}
				bind:selected={item.grade}
				height="30px"
				fontSize="16px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="지역">
			<Text fontSize="16px">{item.address}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="등급">
			<Text fontSize="16px">{item.birth}</Text>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="후기">
			<Text fontSize="16px">{item.reviews.toLocaleString()}개</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="구매">
			<Text fontSize="16px">{item.purchases.toLocaleString()}건</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="구매 금액">
			<Text fontSize="16px">{item.purchasePrice.toLocaleString()}원</Text>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="가입일">
			<Text fontSize="16px">{item.registerDate}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="구매">
			<Text fontSize="16px">{item.lastLogin}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="구매 금액">
			<Text fontSize="16px">{item.point}P</Text>
		</GreyBgTitledRow>
	</Flex>
</DesignedDetailLayout>

{#each children as child, i}
	<ChildDetail item={child} idx={i + 1} />
{/each}
