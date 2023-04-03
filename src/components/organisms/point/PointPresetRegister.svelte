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
		{ id: 1, name: "제한없음", value: 1 },
		{ id: 2, name: "SMS & 푸쉬알림 동의", value: 2 },
		{ id: 3, name: "SMS or 푸쉬알림 동의", value: 3 },
		{ id: 4, name: "SMS 동의", value: 4 },
		{ id: 5, name: "푸쉬알림 동의", value: 5 },
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
	<DetailRow title="발급 대상">
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
