<script lang="ts">
	export let fontSize: string = "18px";
	export let width: string = "auto";
</script>

<div style="font-size:{fontSize};width:{width}">
	<slot />
</div>

<style>
	div {
		color: #777;
		text-align: center;
	}
</style>
