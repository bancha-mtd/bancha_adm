import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Text from "../../atoms/Text/Text";
import Spinner from "../../atoms/Spinner/Spinner";
import ReservationListItem from "../../molecules/listitem/ReservationListItem";
import ReservationApi from "../../../libs/apis/ReservationApi";
import PageChanger from "../../molecules/list/PageChanger";

const ReservationList = () => {
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await ReservationApi.getReservationList(searchOption);
    if (res.status === 200) {
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["getReservationList", searchOption],
    fetcher
  );

  const search = useCallback(
    (tgt: string, query: string) => {
      let temp: any = {
        pageNum: 1,
        pageSize: 10,
      };
      if (query !== "") {
        if (tgt === "상품명") temp["productTitle"] = query;
        else if (tgt === "파트너") temp["partnerName"] = query;
        else if (tgt === "담당자") temp["managerName"] = query;
        else if (tgt === "예약자") temp["memberNickname"] = query;
        else if (tgt === "지역") temp["address"] = query;
        else if (tgt === "예약번호") temp["reservationNum"] = query;
      }
      setSearchOption(temp);
    },
    [searchOption]
  );

  return (
    <ListWrapper>
      <Search
        target={["상품명", "파트너", "담당자", "예약자", "지역", "예약번호"]}
        submit={search}
      />
      <Panel>
        <ListHead
          titles={[
            "ID",
            "예약번호",
            "결제일자",
            "상태",
            "예약일",
            "예약자",
            "상품명",
            "결제금액",
          ]}
          clickable={Array(7).fill(false)}
          sizes={["5%", "15%", "10%", "5%", "10%", "15%", "20%", "10%"]}
          changeSort={() => {}}
        />
        {isLoading && <Text>Loading...</Text>}
        {isValidating && <Spinner height={"550px"} />}
        {isLoading === false &&
          data.data.content.map((item: any) => {
            return (
              <ReservationListItem
                key={`reservation_${item.id}`}
                reservation={item}
              />
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

export default ReservationList;
