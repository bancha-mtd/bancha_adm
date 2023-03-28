<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import Text from "../../atoms/texts/Text.svelte";

	export let itemId: string;
	let item = {
		id: itemId,
		title: "",
		content: "",
		nickname: "",
		phone: "",
		createtime: "",
		status: "",
	};
	const resend = () => {};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	<GreyBackgroundButton
		width="70px"
		height="30px"
		fontSize="16px"
		onClick={resend}>재전송</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout>
	<DetailRow head={true} title="제목">
		<Text fontSize="16px">{item.title}</Text>
	</DetailRow>
	<DetailRow title="내용">
		<Text fontSize="16px">{item.content}</Text>
	</DetailRow>
	<DetailRow title="닉네임">
		<Text fontSize="16px">{item.nickname}</Text>
	</DetailRow>
	<DetailRow title="수신번호">
		<Text fontSize="16px">{item.phone}</Text>
	</DetailRow>
	<DetailRow title="발송일시">
		<Text fontSize="16px">{item.createtime}</Text>
	</DetailRow>
	<DetailRow title="상태">
		<Text fontSize="16px">{item.status}</Text>
	</DetailRow>
</DetailPanelLayout>
