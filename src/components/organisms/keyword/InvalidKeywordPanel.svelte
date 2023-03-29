<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";
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
	<BoldText fontSize="18px">부적절 문구</BoldText>

	<GreyBackgroundButton
		onClick={modify}
		width="60px"
		height="30px"
		fontSize="16px">수정</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout padding={true}>
	<DetailRow title="부적절 키워드" head={true}>
		<BorderedTextArea
			bind:value={text}
			fontSize="16px"
			width="80%"
			height="300px"
		/>
	</DetailRow>
</DetailPanelLayout>
