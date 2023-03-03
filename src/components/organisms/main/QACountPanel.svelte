<script lang="ts">
	import PanelGreyText from "../../atoms/texts/PanelGreyText.svelte";
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";

	let value: number = 0;
</script>

<TitledPanelLayout
	title="파트너 문의"
	to="/"
	width="100%"
	height="calc((100%-20px)/2)"
>
	<PanelGreyText text={value.toLocaleString()} />
</TitledPanelLayout>

<style>
</style>
