import ItemListPage from "../pages/ItemListPage.svelte";
import LoginPage from "../pages/LoginPage.svelte";
import MainPage from "../pages/MainPage.svelte";

const routes = {
	"/": LoginPage,
	"/main": MainPage,

	"/item": ItemListPage,
};

export default routes;
