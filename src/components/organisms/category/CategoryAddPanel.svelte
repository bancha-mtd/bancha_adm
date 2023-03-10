<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";

	export let addCategory: () => void = () => {};
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
<PanelLayout>
	<div>수정예정</div>
</PanelLayout>
