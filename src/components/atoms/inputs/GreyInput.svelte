<script lang="ts">
	export let value: string;
	export let placeholder: string;
	export let type: string = "text";

	function typeAction(node) {
		node.type = type;
	}
</script>

<input use:typeAction {placeholder} bind:value />

<style>
	input {
		background-color: #efefef;
		border-radius: 10px;
		width: 380px;
		height: 50px;
		padding: 10px;

		font-size: 20px;
	}
</style>
