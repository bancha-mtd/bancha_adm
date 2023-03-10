<script lang="ts">
	import Text from "../../atoms/texts/Text.svelte";

	export let width: string = "auto";
	export let val1: string;
	export let val2: string;
</script>

<div style="width:{width}">
	<Text fontSize="16px">{val1}</Text>
	<Text fontSize="16px">{val2}</Text>
</div>

<style>
	div {
		text-align: center;
	}
</style>
