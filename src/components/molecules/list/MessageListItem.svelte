<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { MessageItem } from "../../utils/Types";

	export let item: MessageItem = {
		id: -1,
		title: "제목",
		content: "내용",
		sendDate: "전송일",
		status: true,
	};
</script>

<ListItemLayout>
	<LinkedText to="/message/{item.id}" width="25%">{item.title}</LinkedText>
	<LinkedText to="/message/{item.id}" width="35%">{item.content}</LinkedText>
	<Text width="20%">{item.sendDate}</Text>
	<Text width="20%">{item.status ? "성공" : "실패"}</Text>
</ListItemLayout>
