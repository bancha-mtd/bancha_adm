<script>
	import { link } from "svelte-spa-router";
	import active from "svelte-spa-router/active";
	import BlackTextButton from "../atoms/buttons/BlackTextButton.svelte";
	import Menu from "../organisms/menu/Menu.svelte";
</script>

<div>main</div>
<a href="/" use:link use:active> About </a>
<BlackTextButton text="aaaaaaaaaa" onClick={() => {}} />

<Menu />

<style>
</style>
