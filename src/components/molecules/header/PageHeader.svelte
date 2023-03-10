<script lang="ts">
	import BoldText from "../../atoms/texts/BoldText.svelte";

	export let title: string;
</script>

<header>
	<BoldText fontSize={"20px"}>{title}</BoldText>
	<slot />
</header>

<style>
	header {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 0 20px;
		background-color: white;
	}
</style>
