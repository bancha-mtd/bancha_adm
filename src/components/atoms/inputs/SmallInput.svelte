<script lang="ts">
	export let value: string;
	export let width: string;
	export let placeholder: string;
</script>

<div style="width:{width}">
	<input bind:value {placeholder} />
</div>

<style>
	div {
		text-align: center;
	}
	input {
		border: 1px solid #ccc;
		width: 50%;
		height: 30px;
		font-size: 18px;
		text-align: center;
	}
</style>
