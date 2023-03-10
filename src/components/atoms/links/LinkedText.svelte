<script lang="ts">
	import { push } from "svelte-spa-router";

	export let fontSize: string = "18px";
	export let width: string = "auto";
	export let to: string;
</script>

<button
	on:click={() => {
		push(to);
		console.log("SIUUUUUUU");
	}}
	style="font-size:{fontSize};width:{width}"
>
	<slot />
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
