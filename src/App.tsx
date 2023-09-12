import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/product/ProductListPage";
import ProductAddPage from "./pages/product/ProductAddPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import CategoryListPage from "./pages/category/CategoryListPage";
import SectionListPage from "./pages/section/SectionListPage";
import SectionDetailPage from "./pages/section/SectionDetailPage";
import ReservationListPage from "./pages/reservation/ReservationListPage";
import ReservationDetailPage from "./pages/reservation/ReservationDetailPage";
import MemberListPage from "./pages/member/MemberListPage";
import MemberDetailPage from "./pages/member/MemberDetailPage";
import PartnerListPage from "./pages/partner/PartnerListPage";
import PartnerDetailPage from "./pages/partner/PartnerDetailPage";
import ManagerListPage from "./pages/manager/ManagerListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/adm" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="product" element={<ProductListPage />} />
        <Route path="product/add" element={<ProductAddPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="category" element={<CategoryListPage />} />
        <Route path="section" element={<SectionListPage />} />
        <Route path="section/:id" element={<SectionDetailPage />} />
        <Route path="reservation" element={<ReservationListPage />} />
        <Route path="reservation/:id" element={<ReservationDetailPage />} />
        <Route path="member" element={<MemberListPage />} />
        <Route path="member/:id" element={<MemberDetailPage />} />
        <Route path="partner" element={<PartnerListPage />} />
        <Route path="partner/:id" element={<PartnerDetailPage />} />
        <Route path="manager" element={<ManagerListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
