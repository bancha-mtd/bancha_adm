<script lang="ts">
	import { push } from "svelte-spa-router";
	import TwoValueText from "../../molecules/list/TwoValueText.svelte";

	export let fontSize: string = "18px";
	export let width: string = "auto";
	export let to: string;
	export let val1: string;
	export let val2: string;
</script>

<button
	on:click={() => {
		push(to);
		console.log("SIUUUUUUU");
	}}
	style="font-size:{fontSize};width:{width}"
>
	<TwoValueText {val1} {val2} {width} />
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button:hover {
		text-decoration: underline;
	}
</style>
