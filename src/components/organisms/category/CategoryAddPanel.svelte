<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";

	const addCategory: () => void = () => {};

	let item = {
		id: -1,
		title: "",
		active: {},
		priority: "",
		icon: "",
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">카테고리 추가</BoldText>

	<GreyBackgroundButton
		onClick={addCategory}
		width="60px"
		height="30px"
		fontSize="16px">추가</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout>
	<DetailRow head={true} title="상품코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="상품명">
		<BorderedInput alignCenter={false} width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="노출">
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
	<DetailRow title="노출 순위">
		<BorderedInput type="number" bind:value={item.priority} />
	</DetailRow>
	<DetailRow title="아이콘">
		<BorderedInput
			fontSize="16px"
			width="500px"
			type="file"
			bind:value={item.icon}
		/>
	</DetailRow>
</DetailPanelLayout>
