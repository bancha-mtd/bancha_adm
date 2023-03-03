<script lang="ts">
	import { link } from "svelte-spa-router";
	import active from "svelte-spa-router/active";

	export let text: string;
	export let to: string;
</script>

<a href={to} use:link use:active>
	{text}
</a>
