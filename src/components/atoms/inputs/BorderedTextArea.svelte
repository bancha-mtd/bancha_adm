<script lang="ts">
	export let value: string;
	export let disabled: boolean = false;
	export let width: string = "80%";
	export let height: string = "100px";
	export let placeholder: string = "";
	export let fontSize: string = "16px";
</script>

<textarea
	style="width:{width};height:{height};font-size:{fontSize}"
	bind:value
	{placeholder}
	{disabled}
/>

<style>
	textarea {
		border: 1px solid #ccc;
	}
</style>
