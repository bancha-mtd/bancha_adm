import React, { useCallback, useState } from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import SectionApi from "../../libs/apis/SectionApi";
import ListWrapper from "../../components/atoms/Layouts/ListWrapper";
import Flex from "../../components/atoms/Layouts/Flex";
import Search from "../../components/organisms/common/Search";
import Button from "../../components/atoms/Button/Button";
import Panel from "../../components/atoms/Layouts/Panel";
import ListHead from "../../components/molecules/listitem/ListHead";
import Spinner from "../../components/atoms/Spinner/Spinner";
import PageChanger from "../../components/molecules/list/PageChanger";
import SectionListItem from "../../components/molecules/listitem/SectionListItem";

const SectionListPage = () => {
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    console.log(searchOption);
    const res = await SectionApi.getSectionList(searchOption);
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
    } else if (e === "노출") {
      temp["useYn"] = temp["useYn"] === true ? false : true;
    }
    setSearchOption(temp);
  };

  const search = useCallback((tgt: string, query: string) => {
    let temp: any = {
      pageNum: 1,
      pageSize: 10,
    };
    if (query !== "") {
      if (tgt === "섹션명") temp["title"] = query;
    }
    setSearchOption(temp);
  }, []);
  return (
    <ListWrapper>
      <Flex align="space-between">
        <Search target={["섹션명"]} submit={search} />
        <Button color="black" width="70px" onClick={() => {}}>
          <Link to="/adm/section/add">등록</Link>
        </Button>
      </Flex>
      <Panel>
        <ListHead
          titles={["ID", "섹션명", "순서", "상품 수", "노출"]}
          sizes={["15%", "40%", "15%", "15%", "15%"]}
          clickable={[true, false, false, false, false]}
          changeSort={changeSort}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return <SectionListItem key={`member_${item.id}`} section={item} />;
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

export default SectionListPage;
