import React, { useState } from "react";
import Flex from "../../components/atoms/Layouts/Flex";
import Button from "../../components/atoms/Button/Button";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ProductDetail from "../../components/organisms/product/ProductDetail";
import ProductOption from "../../components/organisms/product/ProductOption";

const ProductDetailPage = () => {
  const params = useParams();
  const [tab, setTab] = useState(0);

  return (
    <Article>
      <Flex>
        <Button
          width="100px"
          color={tab === 0 ? "black" : "transparent"}
          onClick={() => {
            setTab(0);
          }}>
          상품정보
        </Button>
        <Button
          width="100px"
          color={tab === 1 ? "black" : "transparent"}
          onClick={() => {
            setTab(1);
          }}>
          옵션
        </Button>
      </Flex>
      {tab === 0 ? (
        <ProductDetail id={params.id!} />
      ) : (
        <ProductOption id={params.id!} />
      )}
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ProductDetailPage;
