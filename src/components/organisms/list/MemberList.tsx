import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";
import Flex from "../../atoms/Layouts/Flex";
import MemberApi from "../../../libs/apis/MemberApi";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import MemberListItem from "../../molecules/listitem/MemberListItem";

const MemberList = () => {
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await MemberApi.getMemberList(searchOption);
    if (res.status === 200) {
      console.log(res.data);
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["getMemberList", searchOption],
    fetcher
  );

  const changeSort = (e: string) => {
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
    } else if (e === "구매") {
      if (temp["sortType"] === "buyCnt") {
        temp["sortDirection"] =
          temp["sortDirection"] === "desc" ? "asc" : "desc";
      } else {
        temp["sortType"] = "buyCnt";
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
    } else if (e === "구매금액") {
      if (temp["sortType"] === "paid") {
        temp["sortDirection"] =
          temp["sortDirection"] === "desc" ? "asc" : "desc";
      } else {
        temp["sortType"] = "paid";
        temp["sortDirection"] = "desc";
      }
    }
    setSearchOption(temp);
  };

  const search = useCallback((tgt: string, query: string) => {
    let temp: any = {
      pageNum: 1,
      pageSize: 10,
    };
    if (query !== "") {
      if (tgt === "이메일") temp["email"] = query;
      else if (tgt === "닉네임") temp["nickname"] = query;
      else if (tgt === "전화번호") temp["cellphone"] = query;
      else if (tgt === "지역") temp["location"] = query;
      else if (tgt === "등급") {
        if (query === "VIP" || query === "vip") temp["grade"] = 1;
        else if (query.includes("절친")) temp["grade"] = 2;
        else if (query.includes("친구")) temp["grade"] = 3;
      }
    }
    setSearchOption(temp);
  }, []);

  return (
    <ListWrapper>
      <Flex align="space-between">
        <Search
          target={["이메일", "닉네임", "전화번호", "지역", "등급"]}
          submit={search}
        />
        <Button color="black" width="70px" onClick={() => {}}>
          <Link to="/adm/member/add">등록</Link>
        </Button>
      </Flex>
      <Panel>
        <ListHead
          titles={[
            "ID",
            "닉네임(이메일)",
            "등급",
            "연락처",
            "후기",
            "구매",
            "구매금액",
            "상태",
            "최종 접속",
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
            true,
            true,
            true,
            false,
            false,
          ]}
          changeSort={changeSort}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {/* {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return (
              <MemberListItem key={`member_${item.id}`} member={item} />
            );
          })} */}
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

export default MemberList;
