<script lang="ts">
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";

	export let width: string = "auto";
	export let val1: string;
	export let val2: string;
</script>

<div style="width:{width}">
	<GreyText fontSize="16px">{val1}</GreyText>
	<LightGreyText fontSize="16px">({val2})</LightGreyText>
</div>

<style>
	div {
		text-align: center;
	}
</style>
