<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "제목";
	export let content: string = "내용";
	export let sendDate: string = "발송일시";
	export let status: string = "상태";
</script>

<ListItemLayout>
	<LinkedText to="/message/{id}" width="25%">{title}</LinkedText>
	<LinkedText to="/message/{id}" width="35%">{content}</LinkedText>
	<Text width="20%">{sendDate}</Text>
	<Text width="20%">{status}</Text>
</ListItemLayout>
