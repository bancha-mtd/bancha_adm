<script lang="ts">
	export let width: string = "auto";
	export let height: string = "auto";
</script>

<section style="width: {width};height: {height}">
	<slot />
</section>

<style>
	section {
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-bottom: 20px;
	}
</style>
