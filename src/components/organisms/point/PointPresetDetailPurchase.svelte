<script lang="ts">
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import type { SelectType } from "../../utils/Types";

	let payTypes: SelectType[] = [
		{ id: 1, name: "적립금", value: 1 },
		{ id: 2, name: "적립율", value: 2 },
	];
	export let item = {
		id: -1,
		title: "",
		payType: payTypes[0],
		payPrice: "0",
		maxPayPrice: "0",
		payProducts: [],
		startDate: "",
		endDate: "",
	};
</script>

<DetailPanelLayout>
	<DetailRow title="제목">
		<BorderedInput fontSize="16px" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="사용혜택">
		<SpaceBetween gap="20px"
			><Select
				lists={payTypes}
				bind:selected={item.payType}
				fontSize="16px"
				height="30px"
			/>
			{#if item.payType.id === 1}
				<LabeledBorderedInput
					type="number"
					pre=""
					post="P"
					bind:value={item.payPrice}
				/>
			{:else}
				<LabeledBorderedInput
					type="number"
					pre="구매 금액의"
					post="%"
					bind:value={item.payPrice}
				/>
				<LabeledBorderedInput
					type="number"
					pre="최대 지급"
					post="P"
					bind:value={item.maxPayPrice}
				/>
			{/if}
		</SpaceBetween>
	</DetailRow>
	<DetailRow title="발급 상품">
		<div />
	</DetailRow>
	<DetailRow title="발급 기한">
		<SpaceBetween gap="20px">
			<BorderedInput type="date" fontSize="16px" bind:value={item.startDate} />
			<LightGreyText>~</LightGreyText>
			<BorderedInput type="date" fontSize="16px" bind:value={item.endDate} />
		</SpaceBetween>
	</DetailRow>
</DetailPanelLayout>
