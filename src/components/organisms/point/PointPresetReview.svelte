<script lang="ts">
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";

	export let item = {
		id: -1,
		title: "",
		payPrice: "0",
		payMinTexts: "0",
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
		<LabeledBorderedInput
			type="number"
			pre=""
			post="P"
			bind:value={item.payPrice}
		/>
	</DetailRow>
	<DetailRow title="최소 글자수">
		<LabeledBorderedInput
			type="number"
			pre=""
			post="자 이상"
			bind:value={item.payMinTexts}
		/>
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
