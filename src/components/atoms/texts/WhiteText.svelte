<script lang="ts">
	export let text: string = "";
	export let fontSize: String;
</script>

<div style="font-size: {fontSize};">
	{text}
</div>

<style>
	div {
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
