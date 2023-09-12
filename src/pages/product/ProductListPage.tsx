import React from "react";
import ProductApi from "../../libs/apis/ProductApi";
import Statistics from "../../components/organisms/statistics/Statistics";
import ProductList from "../../components/organisms/list/ProductList";

const ProductListPage = () => {
  return (
    <>
      <Statistics
        name="productStatistics"
        getter={ProductApi.getProductStatistics}
        infos={[
          { title: "전체", name: "totalProductCnt" },
          { title: "노출", name: "usableProductCnt" },
          { title: "신규", name: "latestProductCnt" },
          { title: "반차", name: "banchaOnlyProductCnt" },
        ]}
      />
      <ProductList />
    </>
  );
};

export default ProductListPage;
