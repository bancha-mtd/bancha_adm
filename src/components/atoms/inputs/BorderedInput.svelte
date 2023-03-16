<script lang="ts">
	export let value: string;
	export let width: string = "100%";
	export let height: string = "30px";
	export let placeholder: string;
</script>

<input style="width:{width};height:{height}" bind:value {placeholder} />

<style>
	input {
		border: 1px solid #ccc;
		font-size: 18px;
		text-align: center;
	}
</style>
