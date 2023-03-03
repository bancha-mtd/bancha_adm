<script lang="ts">
	import SpaceAroundCol from "../../atoms/layouts/SpaceAroundCol.svelte";
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import PanelGreyText from "../../atoms/texts/PanelGreyText.svelte";

	export let title: string;
	export let value: number;
</script>

<SpaceAroundCol>
	<DarkGreyText text={title} />
	<PanelGreyText text={value.toLocaleString()} />
</SpaceAroundCol>

<style>
</style>
