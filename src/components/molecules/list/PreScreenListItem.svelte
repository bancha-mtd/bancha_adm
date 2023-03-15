<script lang="ts">
	import UnderlinedButton from "../../atoms/buttons/UnderlinedButton.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let onClick: (obj: object) => void;
	export let item: object;
</script>

<ListItemLayout>
	<Text width="20%">{item.id}</Text>
	<UnderlinedButton
		onClick={() => {
			onClick(item);
		}}
		width="80%">{item.title}</UnderlinedButton
	>
</ListItemLayout>
