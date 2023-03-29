<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let item: object = { id: "번호", title: "환불규정" };
</script>

<ListItemLayout>
	<LinkedText to="/refund/{item.id}" width="30%">{item.id}</LinkedText>
	<LinkedText to="/refund/{item.id}" width="70%">{item.title}</LinkedText>
</ListItemLayout>
