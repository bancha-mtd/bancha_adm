<script lang="ts">
	import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol.svelte";
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import PanelGreyText from "../../atoms/texts/PanelGreyText.svelte";

	export let title: string;
	export let value: number;
	export let fontSize: string = "100px";
</script>

<SpaceAroundCol>
	<DarkGreyText>{title}</DarkGreyText>
	<PanelGreyText {fontSize}>{value.toLocaleString()}</PanelGreyText>
</SpaceAroundCol>

<style>
</style>
