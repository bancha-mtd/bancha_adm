import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";
import ProductListItem from "../../molecules/listitem/ProductListItem";
import Flex from "../../atoms/Layouts/Flex";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import ProductApi from "../../../libs/apis/ProductApi";

const ProductList = () => {
  const searchTargets = ["상품명", "파트너", "담당자", "지역", "코드"];
  const listHeads = [
    "ID",
    "상품명",
    "가격",
    "파트너",
    "담당자",
    "판매량",
    "조회수",
    "노출",
  ];
  const listHeadSizes = ["10%", "35%", "10%", "10%", "10%", "10%", "10%", "5%"];
  const listHeadClickables = [
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
  ];
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
    ["getProductList", searchOption],
    fetcher
  );

  const changeSort = useCallback(
    (e: string) => {
      let temp = { ...searchOption };
      temp["pageNum"] = 1;
      if (e === "ID") {
        if (temp["sortType"] === "new") {
          temp["sortDirection"] =
            temp["sortDirection"] === "desc" ? "asc" : "desc";
        } else {
          temp["sortType"] = "new";
          temp["sortDirection"] = "desc";
        }
      } else if (e === "판매량") {
        if (temp["sortType"] === "sale") {
          temp["sortDirection"] =
            temp["sortDirection"] === "desc" ? "asc" : "desc";
        } else {
          temp["sortType"] = "sale";
          temp["sortDirection"] = "desc";
        }
      } else if (e === "조회수") {
        if (temp["sortType"] === "views") {
          temp["sortDirection"] =
            temp["sortDirection"] === "desc" ? "asc" : "desc";
        } else {
          temp["sortType"] = "views";
          temp["sortDirection"] = "desc";
        }
      } else if (e === "노출") {
        temp["useYn"] = temp["useYn"] === true ? false : true;
      }
      setSearchOption(temp);
    },
    [searchOption]
  );

  const search = useCallback(
    (tgt: string, query: string) => {
      let temp: any = {
        sortDirection: searchOption["sortDirection"],
        sortType: searchOption["sortType"],
        pageNum: 1,
        pageSize: 10,
      };
      if (query !== "") {
        if (tgt === "상품명") temp["productTitle"] = query;
        else if (tgt === "파트너") temp["partnerName"] = query;
        else if (tgt === "담당자") temp["managerName"] = query;
        else if (tgt === "지역") temp["address"] = query;
        else if (tgt === "코드") temp["productId"] = parseInt(query);
      }
      setSearchOption(temp);
    },
    [searchOption]
  );

  return (
    <ListWrapper>
      <Flex align="space-between">
        <Search target={searchTargets} submit={search} />
        <Button color="black" width="70px" onClick={() => {}}>
          <Link to="/adm/product/add">등록</Link>
        </Button>
      </Flex>
      <Panel>
        <ListHead
          titles={listHeads}
          sizes={listHeadSizes}
          clickable={listHeadClickables}
          changeSort={changeSort}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return (
              <ProductListItem key={`product_${item.id}`} product={item} />
            );
          })}
      </Panel>

      <PageChanger
        pageNum={searchOption["pageNum"]}
        maxPage={maxPage}
        setPageNum={(page: number) => {
          setSearchOption({ ...searchOption, pageNum: page });
        }}
      />
    </ListWrapper>
  );
};

export default ProductList;
