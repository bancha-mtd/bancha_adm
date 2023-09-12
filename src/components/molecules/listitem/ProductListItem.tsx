import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import { Link } from "react-router-dom";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

type Props = {
  product: any;
};

const ProductListItem = ({ product = false }: Props) => {
  return (
    <Flex height="50px">
      <Text width="10%">
        <Link to={`/adm/product/${product.id}`}>{product.id}</Link>
      </Text>
      <Text width="35%">
        <Link to={`/adm/product/${product.id}`}>{product.productName}</Link>
      </Text>
      <Text width="10%">{product.price.toLocaleString()}</Text>
      <Text width="10%">{product.partnerName}</Text>
      <Text width="10%">{product.managerName}</Text>
      <Text width="10%">
        {typeof product.saleCnt === "number"
          ? product.saleCnt.toLocaleString()
          : product.saleCnt}
      </Text>
      <Text width="10%">
        {typeof product.viewCnt === "number"
          ? product.viewCnt.toLocaleString()
          : product.viewCnt}
      </Text>
      <Button
        onClick={() => {
          console.log(product);
          alert("아직 미완성");
        }}
        width="5%">
        {product.useYn === true ? "Y" : "N"}
      </Button>
    </Flex>
  );
};

export default ProductListItem;
