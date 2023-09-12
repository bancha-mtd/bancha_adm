import React from "react";
import CategoryList from "../../components/organisms/list/CategoryList";
import CategoryAdd from "../../components/organisms/category/CategoryAdd";

const CategoryListPage = () => {
  return (
    <>
      <CategoryAdd />
      <CategoryList />
    </>
  );
};

export default CategoryListPage;
