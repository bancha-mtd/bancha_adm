<script lang="ts">
	import PanelGreyText from "../../atoms/texts/PanelGreyText.svelte";
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";

	export let title: string = "";
	export let value: number = 0;
	export let width = "calc((100%-60px)/4)";
	export let height = "250px";
</script>

<TitledPanelLayout {title} {width} {height}>
	<PanelGreyText fontSize="100px" marginTop="10px"
		>{value.toLocaleString()}</PanelGreyText
	>
</TitledPanelLayout>
