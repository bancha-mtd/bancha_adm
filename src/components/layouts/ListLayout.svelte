<script lang="ts">
	export let width: string = "auto";
	export let height: string = "auto";
</script>

<section style="width: {width};height: {height}">
	<ul>
		<slot />
	</ul>
</section>

<style>
	section {
		background-color: white;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
