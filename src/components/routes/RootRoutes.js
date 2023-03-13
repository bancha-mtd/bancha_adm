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
import ManagerListPage from "../pages/member/ManagerListPage.svelte";
import MemberDetailPage from "../pages/member/MemberDetailPage.svelte";
import MemberListPage from "../pages/member/MemberListPage.svelte";
import PartnerDetailPage from "../pages/member/PartnerDetailPage.svelte";
import PartnerListPage from "../pages/member/PartnerListPage.svelte";
import PointRecordListPage from "../pages/member/PointRecordListPage.svelte";
import NotFound from "../pages/NotFound.svelte";
import MessageDetailPage from "../pages/notification/MessageDetailPage.svelte";
import MessageListPage from "../pages/notification/MessageListPage.svelte";
import ReservationDetailPage from "../pages/reservation/ReservationDetailPage.svelte";
import ReservationListPage from "../pages/reservation/ReservationListPage.svelte";
import ReviewDetailPage from "../pages/reservation/ReviewDetailPage.svelte";
import ReviewListPage from "../pages/reservation/ReviewListPage.svelte";

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

	"/review": ReviewListPage,
	"/review/:id": ReviewDetailPage,

	"/member": MemberListPage,
	"/member/:id": MemberDetailPage,

	"/partner": PartnerListPage,
	"/partner/:id": PartnerDetailPage,

	"/manager": ManagerListPage,

	"/point": PointRecordListPage,

	"/message": MessageListPage,
	"/message/:id": MessageDetailPage,

	"*": NotFound,
};

export default routes;
