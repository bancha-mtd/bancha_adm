<script lang="ts">
	export let fontSize: String;
</script>

<div style="font-size: {fontSize};">
	<slot />
</div>

<style>
	div {
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
