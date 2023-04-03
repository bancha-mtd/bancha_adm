<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";

	const send: () => void = () => {};

	let item = {
		sendDate: "",
		content: "",
		img: "",
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">푸쉬알림 전송</BoldText>

	<GreyBackgroundButton
		onClick={send}
		width="60px"
		height="30px"
		fontSize="16px">전송</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout>
	<DetailRow head={true} title="발송 시간">
		<BorderedInput
			type="datetime"
			height="30px"
			fontSize="16px"
			value={item.sendDate}
		/>
	</DetailRow>
	<DetailRow title="내용">
		<BorderedTextArea width="40%" height="200px" bind:value={item.content} />
	</DetailRow>
	<DetailRow title="사진">
		<BorderedInput
			fontSize="16px"
			width="500px"
			type="file"
			bind:value={item.img}
		/>
	</DetailRow>
</DetailPanelLayout>
