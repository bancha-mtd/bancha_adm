<script lang="ts">
	export let fontSize: string = "16px";
	export let width: string = "auto";
</script>

<div style="font-size:{fontSize};width:{width}">
	<slot />
</div>

<style>
	div {
		text-align: center;
	}
</style>
