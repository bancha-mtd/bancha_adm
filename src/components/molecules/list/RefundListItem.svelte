<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let item: object = { id: "번호", title: "환불규정" };
</script>

<ListItemLayout>
	<Text width="30%">{item.id}</Text>
	<LinkedText to="/refund/{item.id}" width="70%">{item.title}</LinkedText>
</ListItemLayout>
