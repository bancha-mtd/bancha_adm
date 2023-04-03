<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";
	import Text from "../../atoms/texts/Text.svelte";

	export let itemId: string;

	let item = {
		id: -1,
		title: "",
		content: "",
		createtime: "",
		views: "",
	};

	const deleteItem = () => {
		return;
	};
	const modifyItem = () => {
		console.log(item);
		return;
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	{#if item.id !== -1}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={modifyItem}>수정</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout>
	<DetailRow head={true} title="ID">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput fontSize="16px" width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="내용">
		<BorderedTextArea
			fontSize="16px"
			width="40%"
			height="300px"
			bind:value={item.content}
		/>
	</DetailRow>
	<DetailRow title="업로드 일자">
		<Text fontSize="16px">{item.createtime}</Text>
	</DetailRow>
</DetailPanelLayout>
