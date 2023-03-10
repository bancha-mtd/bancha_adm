<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "섹션명";
	export let priority: string = "노출 순위";
	export let items: string = "상품수";
	export let active: string = "노출";
</script>

<ListItemLayout>
	<Text width="20%">{id}</Text>
	<LinkedText to="/section/{id}" width="25%">{title}</LinkedText>
	<Text width="20%">{priority}</Text>
	<Text width="20%">{items}</Text>
	<Text width="15%">{active}</Text>
</ListItemLayout>
