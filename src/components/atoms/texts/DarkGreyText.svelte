<script lang="ts">
	export let text: string;
	export let fontSize: string = "18px";
	export let width: string = "auto";
</script>

<div style="font-size:{fontSize};width:{width}">
	{text}
</div>

<style>
	div {
		color: #444444;
		text-align: center;
	}
</style>
