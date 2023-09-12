import React, { useState } from "react";
import { styled } from "styled-components";
import ProductApi from "../../../libs/apis/ProductApi";
import useSWR from "swr";
import Flex from "../../atoms/Layouts/Flex";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";

type Props = {
  addProductToList: any;
  removeProductFromList: any;
  selectedProducts: { id: number; title: string }[];
};

const ProductFinder = ({
  addProductToList,
  removeProductFromList,
  selectedProducts,
}: Props) => {
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    sortDirection: "desc",
    sortType: "new",
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await ProductApi.getProductList(searchOption);
    if (res.status === 200) {
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["smallProductList", searchOption],
    fetcher,
    { revalidateOnFocus: false }
  );

  const [productSearchQuery, setProductSearchQuery] = useState("");

  return (
    <Flex
      width="calc(100% - 190px)"
      height="875px"
      direction="column"
      crossalign="start"
      padding="10px 0"
      gap="10px">
      <form
        style={{ display: "flex", gap: "10px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Input
          width="300px"
          value={productSearchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setProductSearchQuery(e.target.value);
          }}
        />
        <Button
          color="grey"
          onClick={() => {
            setSearchOption({
              ...searchOption,
              productTitle: productSearchQuery,
            });
          }}>
          검색
        </Button>
      </form>
      <ProductSearchListWrapper>
        {isLoading && <Spinner />}
        <Flex width="100%" height="30px" padding="0 20px">
          <Text width="30%">ID</Text>
          <Text width="70%">상품명</Text>
        </Flex>
        <Divider />
        {isLoading === false &&
          data.data.content.map((item: any) => {
            return (
              <Button
                key={`SearchListItem_${item.id}`}
                width="100%"
                onClick={() => {
                  addProductToList({ id: item.id, title: item.productName });
                }}>
                <Flex width="100%" align="space-around" gap="0">
                  <Text width="30%">{item.id}</Text>
                  <Text width="70%">{item.productName}</Text>
                </Flex>
              </Button>
            );
          })}
        <Divider />
        {isLoading === false && (
          <PageChanger
            pageNum={searchOption["pageNum"]}
            maxPage={maxPage}
            setPageNum={(page: number) => {
              setSearchOption({ ...searchOption, pageNum: page });
            }}
          />
        )}
      </ProductSearchListWrapper>
      <ProductSearchListWrapper>
        <Flex width="100%" height="30px" padding="0 20px">
          <Text width="30%">ID</Text>
          <Text width="70%">상품명</Text>
        </Flex>
        <Divider />
        {selectedProducts.map((item) => {
          return (
            <Button
              key={`SelectedProductListItem_${item.id}`}
              width="100%"
              onClick={() => {
                removeProductFromList(item);
              }}>
              <Flex width="100%" align="space-around" gap="0">
                <Text width="30%">{item.id}</Text>
                <Text width="70%">{item.title}</Text>
              </Flex>
            </Button>
          );
        })}
      </ProductSearchListWrapper>
    </Flex>
  );
};

const ProductSearchListWrapper = styled.div`
  width: 100%;
  height: 365px;
  border: 1px solid black;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  position: relative;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgrey;
`;

export default ProductFinder;
