<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";

	let text: string = "";

	const modify = () => {
		console.log(text);
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">추천 키워드</BoldText>

	<GreyBackgroundButton
		onClick={modify}
		width="60px"
		height="30px"
		fontSize="16px">수정</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout padding={true}>
	<DetailRow title="키워드" head={true}>
		<BorderedInput fontSize="16px" width="80%" bind:value={text} />
	</DetailRow>
</DetailPanelLayout>
