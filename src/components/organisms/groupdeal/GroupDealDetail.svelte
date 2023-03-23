<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";

	export let itemId: string;

	let points: object[] = [
		{ id: 1, name: "적립율" },
		{ id: 2, name: "적립금" },
	];
	let item = {
		id: -1,
		title: "",
		hashtags: "",
		reservationDate: "",
		startDate: "",
		endDate: "",
		label: "",
		pointType: points[0],
		pointPercentage: "",
		pointValue: "",
	};

	const deleteItem = () => {
		return;
	};
	const addItem = () => {
		console.log(item);
		return;
	};
	const modifyItem = () => {
		console.log(item);
		return;
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	{#if item.id !== -1}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={item.id !== -1 ? modifyItem : addItem}
		>{#if item.id !== -1}수정{:else}등록{/if}</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout height="calc(100vh - 190px)">
	<DetailRow head={true} title="상품코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			alignCenter={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput fontSize="16px" width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="해시태그">
		<BorderedInput fontSize="16px" width="80%" bind:value={item.hashtags} />
	</DetailRow>
	<DetailRow title="체험일자">
		<BorderedInput
			fontSize="16px"
			alignCenter={true}
			type="datetime-local"
			bind:value={item.reservationDate}
		/>
	</DetailRow>
	<DetailRow title="시작일자">
		<BorderedInput
			fontSize="16px"
			alignCenter={true}
			type="datetime-local"
			bind:value={item.startDate}
		/>
	</DetailRow>
	<DetailRow title="종료일자">
		<BorderedInput
			fontSize="16px"
			alignCenter={true}
			type="datetime-local"
			bind:value={item.endDate}
		/>
	</DetailRow>
	<DetailRow title="라벨">
		<BorderedInput bind:value={item.label} />
		<LightGreyText fontSize="14px" marginLeft="10px"
			>미사용 시 빈칸으로 유지</LightGreyText
		>
	</DetailRow>
	<DetailRow title="포인트">
		<SpaceAround gap="30px">
			<Select
				lists={points}
				bind:selected={item.pointType}
				fontSize="16px"
				height="30px"
			/>
			{#if item.pointType.id === 1}
				<LabeledBorderedInput
					width="70px"
					type="number"
					bind:value={item.pointPercentage}
					pre="구매 금액의"
					post="%"
				/>
			{:else}
				<LabeledBorderedInput
					width="70px"
					type="number"
					bind:value={item.pointValue}
					pre="지금 포인트"
					post=""
				/>
			{/if}
			<LabeledBorderedInput
				width="100px"
				type="number"
				bind:value={item.pointMax}
				pre="최대금액"
				post="원"
			/>
			<LightGreyText fontSize="14px" marginLeft="10px"
				>미사용 시 0으로 설정</LightGreyText
			>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="옵션">
		<div />
	</DetailRow>
</DetailPanelLayout>
