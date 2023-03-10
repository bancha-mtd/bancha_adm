import ExhibitionDetailPage from "../pages/item/ExhibitionDetailPage.svelte";
import ExhibitionListPage from "../pages/item/ExhibitionListPage.svelte";
import GroupDealDetailPage from "../pages/item/GroupDealDetailPage.svelte";
import GroupDealListPage from "../pages/item/GroupDealListPage.svelte";
import ItemDetailPage from "../pages/item/ItemDetailPage.svelte";
import ItemListPage from "../pages/item/ItemListPage.svelte";
import LoginPage from "../pages/LoginPage.svelte";
import MainPage from "../pages/MainPage.svelte";
import NotFound from "../pages/NotFound.svelte";

const routes = {
	"/": LoginPage,
	"/main": MainPage,

	"/item": ItemListPage,
	"/item/:id": ItemDetailPage,

	"/exhibition": ExhibitionListPage,
	"/exhibition/:id": ExhibitionDetailPage,

	"/groupdeal": GroupDealListPage,
	"/groupdeal/:id": GroupDealDetailPage,

	"*": NotFound,
};

export default routes;
