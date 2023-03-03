<script lang="ts">
	import BoldText from "../../atoms/texts/BoldText.svelte";

	export let title: string;
</script>

<div>
	<BoldText text={title} fontSize={"20px"} />
	<slot />
</div>

<style>
	div {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 0 20px;
		background-color: white;
	}
</style>
