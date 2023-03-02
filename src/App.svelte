<script lang="ts">
	import Router from "svelte-spa-router";
	import Header from "./components/organisms/header/Header.svelte";
	import routes from "./components/routes/RootRoutes";
</script>

<Header />
<Router {routes} />
