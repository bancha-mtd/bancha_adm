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
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-y: scroll;
	}
	main::-webkit-scrollbar {
		display: none;
	}
</style>
