import ItemDetailPage from "../pages/ItemDetailPage.svelte";
import ItemListPage from "../pages/ItemListPage.svelte";
import LoginPage from "../pages/LoginPage.svelte";
import MainPage from "../pages/MainPage.svelte";
import NotFound from "../pages/NotFound.svelte";

const routes = {
	"/": LoginPage,
	"/main": MainPage,

	"/item": ItemListPage,
	"/item/:id": ItemDetailPage,

	"*": NotFound,
};

export default routes;
