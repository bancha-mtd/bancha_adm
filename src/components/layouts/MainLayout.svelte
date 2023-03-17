<script lang="ts">
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import { isLoggedIn } from "../stores/UserInfoStore";

	onMount(() => {
		if (!$isLoggedIn) {
			push("/");
		}
	});
</script>

<main>
	<slot />
</main>

<style>
	main {
		width: calc(100vw - 200px);
		background-color: #ddd;
	}
</style>
