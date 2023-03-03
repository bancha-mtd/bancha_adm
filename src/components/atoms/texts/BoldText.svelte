<script lang="ts">
	export let text: string;
	export let fontSize: string = "18px";
</script>

<div style="font-size:{fontSize}">
	{text}
</div>

<style>
	div {
		font-weight: 700;
	}
</style>
