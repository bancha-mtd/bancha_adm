<script lang="ts">
	export let list: string = "";
	export let value: string;
	export let disabled: boolean = false;
	export let width: string = "150px";
	export let height: string = "30px";
	export let placeholder: string = "";
	export let alignCenter: boolean = true;
	export let fontSize: string = "18px";
	export let type: string = "text";
	export let click: () => void = () => {};

	function typeAction(node) {
		node.type = type;
	}
</script>

<input
	style="width:{width};height:{height};text-align:{alignCenter
		? 'center'
		: 'left'};font-size:{fontSize}"
	{list}
	use:typeAction
	bind:value
	on:click={click}
	{placeholder}
	{disabled}
/>

<style>
	input {
		border: 1px solid #ccc;
	}
</style>
