<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import type { SelectType } from "../../utils/Types";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import PointPresetDetailPurchase from "./PointPresetDetailPurchase.svelte";
	import PointPresetRegister from "./PointPresetRegister.svelte";
	import PointPresetReview from "./PointPresetReview.svelte";
	import PointPresetAnniversary from "./PointPresetAnniversary.svelte";

	export let itemId: string;

	let pointTypes: SelectType[] = [
		{ id: 1, name: "상품구매", value: 1 },
		{ id: 2, name: "회원가입", value: 2 },
		{ id: 3, name: "리뷰작성", value: 3 },
		{ id: 4, name: "기념일", value: 4 },
	];
	let pointType: SelectType = pointTypes[0];

	let items = [];

	const modifyItem = () => {
		console.log(items);
		return;
	};
</script>

<SpaceBetween gap="10px" marginBottom="20px">
	{#if itemId !== "new"}
		<Select
			lists={pointTypes}
			bind:selected={pointType}
			height="30px"
			fontSize="16px"
		/>
	{/if}
	<div>{itemId}</div>
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={modifyItem}>수정</GreyBackgroundButton
	>
</SpaceBetween>

{#if pointType.value === 1}
	<PointPresetDetailPurchase />
{:else if pointType.value === 2}
	<PointPresetRegister />
{:else if pointType.value === 3}
	<PointPresetReview />
{:else if pointType.value === 4}
	<PointPresetAnniversary />
{/if}
