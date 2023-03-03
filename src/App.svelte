<script lang="ts">
	import Router from "svelte-spa-router";
	import Header from "./components/organisms/header/Header.svelte";
	import Menu from "./components/organisms/menu/Menu.svelte";
	import routes from "./components/routes/RootRoutes";
</script>

<Header />
<div>
	<Menu />
	<Router {routes} />
</div>

<style>
	div {
		width: 100vw;
		height: calc(100vh - 50px);
		display: flex;
		justify-content: space-between;
	}
</style>
