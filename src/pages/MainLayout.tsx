import React from "react";
import Header from "../components/organisms/common/Header";
import Menu from "../components/organisms/common/Menu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
