import React from "react";
import ManagerList from "../../components/organisms/list/ManagerList";
import ManagerAdd from "../../components/organisms/manager/ManagerAdd";

const ManagerListPage = () => {
  return (
    <>
      <ManagerAdd />
      <ManagerList />
    </>
  );
};

export default ManagerListPage;
