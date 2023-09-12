import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";
import Flex from "../../atoms/Layouts/Flex";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import PartnerListItem from "../../molecules/listitem/PartnerListItem";
import PartnerApi from "../../../libs/apis/PartnerApi";

const PartnerList = () => {
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    sortDirection: "desc",
    sortType: "new",
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await PartnerApi.getPartnerList(searchOption);
    if (res.status === 200) {
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["getPartnerList", searchOption],
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
      } else if (e === "판매") {
        if (temp["sortType"] === "saleCnt") {
          temp["sortDirection"] =
            temp["sortDirection"] === "desc" ? "asc" : "desc";
        } else {
          temp["sortType"] = "saleCnt";
          temp["sortDirection"] = "desc";
        }
      } else if (e === "후기") {
        if (temp["sortType"] === "review") {
          temp["sortDirection"] =
            temp["sortDirection"] === "desc" ? "asc" : "desc";
        } else {
          temp["sortType"] = "review";
          temp["sortDirection"] = "desc";
        }
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
        if (tgt === "닉네임") temp["nickName"] = query;
        else if (tgt === "계정") temp["userId"] = query;
        else if (tgt === "대표자명") temp["ceoName"] = query;
        else if (tgt === "전화번호") temp["phoneNumber"] = query;
        else if (tgt === "등급") {
          let grades: any = { 우수: 1, 보통: 2, 관리요망: 3 };
          if (typeof grades[query] !== "undefined") {
            temp["grade"] = grades[query];
          }
        }
      }
      setSearchOption(temp);
    },
    [searchOption]
  );

  return (
    <ListWrapper>
      <Flex align="space-between">
        <Search
          target={["닉네임", "계정", "대표자명", "전화번호", "등급"]}
          submit={search}
        />
        <Button color="black" width="70px" onClick={() => {}}>
          <Link to="/adm/partner/add">등록</Link>
        </Button>
      </Flex>
      <Panel>
        <ListHead
          titles={[
            "ID",
            "닉네임(계정)",
            "등급",
            "대표자",
            "연락처",
            "후기",
            "판매",
            "상품",
            "상태",
          ]}
          sizes={[
            "10%",
            "20%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
            "10%",
          ]}
          clickable={[
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
          ]}
          changeSort={changeSort}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return (
              <PartnerListItem key={`partner_${item.id}`} partner={item} />
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

export default PartnerList;
