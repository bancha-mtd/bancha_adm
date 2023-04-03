<script lang="ts">
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import type { SelectType } from "../../utils/Types";

	let payConditions: SelectType[] = [
		{ id: 1, name: "생일", value: 1 },
		{ id: 2, name: "자녀 생일", value: 2 },
	];
	export let item = {
		id: -1,
		title: "",
		payCondition: payConditions[0],
		payPrice: "0",
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
	<DetailRow title="기념일 정보">
		<Select
			lists={payConditions}
			bind:selected={item.payCondition}
			fontSize="16px"
			height="30px"
		/>
	</DetailRow>
	<DetailRow title="발급 기한">
		<SpaceBetween gap="20px">
			<BorderedInput type="date" fontSize="16px" bind:value={item.startDate} />
			<LightGreyText>~</LightGreyText>
			<BorderedInput type="date" fontSize="16px" bind:value={item.endDate} />
		</SpaceBetween>
	</DetailRow>
</DetailPanelLayout>
