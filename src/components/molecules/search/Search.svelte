<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Input from "../../atoms/inputs/Input.svelte";

	export let onEnter: () => void = () => {};
	export let value: string;
	export let width: string = "350px";
</script>

<form on:submit|preventDefault={onEnter}>
	<Input bind:value {width} />
	<GreyBackgroundButton onClick={onEnter} fontSize="18px"
		>검색</GreyBackgroundButton
	>
</form>

<style>
	form {
		display: flex;
		gap: 20px;
	}
</style>
