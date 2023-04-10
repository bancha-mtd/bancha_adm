<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { RefundItem } from "../../utils/Types";

	export let item: RefundItem = { id: -1, title: "환불규정" };
</script>

<ListItemLayout>
	<LinkedText to="/refund/{item.id}" width="30%">{item.id}</LinkedText>
	<LinkedText to="/refund/{item.id}" width="70%">{item.title}</LinkedText>
</ListItemLayout>
