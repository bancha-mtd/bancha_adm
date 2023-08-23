import CategoryListPage from "../pages/item/CategoryListPage.svelte";
import ExhibitionDetailPage from "../pages/item/ExhibitionDetailPage.svelte";
import ExhibitionListPage from "../pages/item/ExhibitionListPage.svelte";
import GroupDealDetailPage from "../pages/item/GroupDealDetailPage.svelte";
import GroupDealListPage from "../pages/item/GroupDealListPage.svelte";
import ItemAddPage from "../pages/item/ItemAddPage.svelte";
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
import MessageSendingPage from "../pages/notification/MessageSendingPage.svelte";
import PushAlarmDetailPage from "../pages/notification/PushAlarmDetailPage.svelte";
import PushAlarmListPage from "../pages/notification/PushAlarmListPage.svelte";
import ReservationDetailPage from "../pages/reservation/ReservationDetailPage.svelte";
import ReservationListPage from "../pages/reservation/ReservationListPage.svelte";
import ReviewDetailPage from "../pages/reservation/ReviewDetailPage.svelte";
import ReviewListPage from "../pages/reservation/ReviewListPage.svelte";
import BannerDetailpage from "../pages/setting/BannerDetailpage.svelte";
import BannerListPage from "../pages/setting/BannerListPage.svelte";
import EventDetailPage from "../pages/setting/EventDetailPage.svelte";
import EventListPage from "../pages/setting/EventListPage.svelte";
import FaqDetailPage from "../pages/setting/FAQDetailPage.svelte";
import KeywordPage from "../pages/setting/KeywordPage.svelte";
import MessagePresetPage from "../pages/setting/MessagePresetPage.svelte";
import NoticeDetailPage from "../pages/setting/NoticeDetailPage.svelte";
import NoticeListPage from "../pages/setting/NoticeListPage.svelte";
import PointPresetDetailPage from "../pages/setting/PointPresetDetailPage.svelte";
import PointPresetPage from "../pages/setting/PointPresetPage.svelte";
import PreScreenListPage from "../pages/setting/PreScreenListPage.svelte";
import PushPresetPage from "../pages/setting/PushPresetPage.svelte";
import RefundDetailPage from "../pages/setting/RefundDetailPage.svelte";
import RefundListPage from "../pages/setting/RefundListPage.svelte";

const routes = {
  "/": LoginPage,
  "/main": MainPage,

  "/item": ItemListPage,
  "/item/add": ItemAddPage,
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
  "/message/send": MessageSendingPage,
  "/message/:id": MessageDetailPage,

  "/push": PushAlarmListPage,
  "/push/:id": PushAlarmDetailPage,

  "/notice": NoticeListPage,
  "/notice/:id": NoticeDetailPage,
  "/faq/:id": FaqDetailPage,

  "/event": EventListPage,
  "/event/:id": EventDetailPage,

  "/banner": BannerListPage,
  "/banner/:id": BannerDetailpage,

  "/pre": PreScreenListPage,

  "/keyword": KeywordPage,

  "/refund": RefundListPage,
  "/refund/:id": RefundDetailPage,

  "/preset/point": PointPresetPage,
  "/preset/point/:id": PointPresetDetailPage,

  "/preset/message": MessagePresetPage,

  "/preset/push": PushPresetPage,

  "*": NotFound,
};

export default routes;
