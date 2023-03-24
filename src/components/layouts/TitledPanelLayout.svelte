<script lang="ts">
	import BoldText from "../atoms/texts/BoldText.svelte";

	export let title: string;
	export let width: string = "auto";
	export let height: string = "auto";
</script>

<section class="panel" style="width: {width};height: {height}">
	<BoldText>{title}</BoldText>
	<slot />
</section>

<style>
	.panel {
		background-color: white;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		display: flex;
		flex-direction: column;
	}
</style>
