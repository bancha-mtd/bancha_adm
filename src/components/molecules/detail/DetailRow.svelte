<script lang="ts">
	import DetailRowTitle from "../../atoms/texts/DetailRowTitle.svelte";

	export let head: boolean = false;
	export let title: string;
</script>

<div style="border-top:{head ? 'none' : '1px solid #ccc'}">
	<DetailRowTitle>
		{title}
	</DetailRowTitle>
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 10px 20px 10px 20px;
	}
</style>
