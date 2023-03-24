<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";

	export let itemId: string;

	let points: object[] = [
		{ id: 1, name: "적립율" },
		{ id: 2, name: "적립금" },
	];
	let item = {
		id: -1,
		title: "",
		priority: "",
		layout: "",
		active: {},
		bg: "",
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
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="노출 순위">
		<BorderedInput fontSize="16px" type="number" bind:value={item.priority} />
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput fontSize="16px" width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="레이아웃">
		<BorderedInput fontSize="16px" type="number" bind:value={item.layout} />
		<LightGreyText fontSize="14px" marginLeft="10px">1~5</LightGreyText>
	</DetailRow>
	<DetailRow title="라벨">
		<Radio
			name="active"
			bind:value={item.active}
			height="30px"
			width="80px"
			fontSize="16px"
			lists={[
				{ id: 1, name: "예" },
				{ id: 0, name: "아니오" },
			]}
		/>
	</DetailRow>
	<DetailRow title="배경색">
		<BorderedInput fontSize="16px" type="color" bind:value={item.bg} />
	</DetailRow>
	<DetailRow title="상품">
		<div />
	</DetailRow>
</DetailPanelLayout>
