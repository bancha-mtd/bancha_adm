<script lang="ts">
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import Image from "../../atoms/images/Image.svelte";

	export let itemId: string;

	let item = {
		id: -1,
		sendDate: "",
		content: "",
		img: "",
		status: "",
	};

	const get = () => {};
</script>

<DetailPanelLayout>
	<DetailRow head={true} title="발송 일자">
		<Text fontSize="16px">{item.sendDate.toLocaleString()}</Text>
	</DetailRow>
	<DetailRow title="내용">
		<Text fontSize="16px">{item.content}</Text>
	</DetailRow>
	<DetailRow title="설명">
		<Image src={item.img} />
	</DetailRow>
	<DetailRow title="상태">
		<Text fontSize="16px">{item.status}</Text>
	</DetailRow>
</DetailPanelLayout>
