import CategoryListPage from "../pages/item/CategoryListPage.svelte";
import ExhibitionDetailPage from "../pages/item/ExhibitionDetailPage.svelte";
import ExhibitionListPage from "../pages/item/ExhibitionListPage.svelte";
import GroupDealDetailPage from "../pages/item/GroupDealDetailPage.svelte";
import GroupDealListPage from "../pages/item/GroupDealListPage.svelte";
import ItemDetailPage from "../pages/item/ItemDetailPage.svelte";
import ItemListPage from "../pages/item/ItemListPage.svelte";
import SectionDetailPage from "../pages/item/SectionDetailPage.svelte";
import SectionListPage from "../pages/item/SectionListPage.svelte";
import LoginPage from "../pages/LoginPage.svelte";
import MainPage from "../pages/MainPage.svelte";
import NotFound from "../pages/NotFound.svelte";
import ReservationDetailPage from "../pages/reservation/ReservationDetailPage.svelte";
import ReservationListPage from "../pages/reservation/ReservationListPage.svelte";

const routes = {
	"/": LoginPage,
	"/main": MainPage,

	"/item": ItemListPage,
	"/item/:id": ItemDetailPage,

	"/category": CategoryListPage,

	"/exhibition": ExhibitionListPage,
	"/exhibition/:id": ExhibitionDetailPage,

	"/groupdeal": GroupDealListPage,
	"/groupdeal/:id": GroupDealDetailPage,

	"/section": SectionListPage,
	"/section/:id": SectionDetailPage,

	"/reservation": ReservationListPage,
	"/reservation/:id": ReservationDetailPage,

	"*": NotFound,
};

export default routes;
