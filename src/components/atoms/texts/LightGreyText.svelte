<script lang="ts">
	export let fontSize: string = "18px";
	export let width: string = "auto";
</script>

<div style="font-size:{fontSize};width:{width}">
	<slot />
</div>

<style>
	div {
		color: #bbbbbb;
		text-align: center;
	}
</style>
