<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { PushItem } from "../../utils/Types";

	export let item: PushItem = {
		id: -1,
		content: "내용",
		sendDate: "전송일",
		status: true,
	};
</script>

<ListItemLayout>
	<LinkedText to="/push/{item.id}" width="45%">{item.content}</LinkedText>
	<Text width="30%">{item.sendDate}</Text>
	<Text width="15%">{item.status ? "성공" : "실패"}</Text>
</ListItemLayout>
