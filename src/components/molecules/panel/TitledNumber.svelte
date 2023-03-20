<script lang="ts">
	import SpaceBetweenCol from "../../atoms/layouts/SpaceBetweenCol.svelte";
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import PanelGreyText from "../../atoms/texts/PanelGreyText.svelte";

	export let title: string;
	export let value: number;
	export let fontSize: string = "80px";
</script>

<SpaceBetweenCol height="100px">
	<DarkGreyText>{title}</DarkGreyText>
	<PanelGreyText marginTop="-20px" {fontSize}
		>{value.toLocaleString()}</PanelGreyText
	>
</SpaceBetweenCol>

<style>
</style>
