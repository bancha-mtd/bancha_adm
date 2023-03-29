<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";

	export let itemId: string;

	let item = {
		id: -1,
		title: "",
		refundImg: "",
	};

	const modifyItem = () => {
		console.log(item);
		return;
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={modifyItem}>수정</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout height="calc(100vh - 190px)">
	<DetailRow head={true} title="코드">
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
	<DetailRow title="이미지">
		<BorderedInput
			fontSize="16px"
			width="500px"
			type="file"
			bind:value={item.refundImg}
		/>
	</DetailRow>
</DetailPanelLayout>
