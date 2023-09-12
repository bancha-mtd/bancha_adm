import React from "react";
import Statistics from "../../components/organisms/statistics/Statistics";
import MemberApi from "../../libs/apis/MemberApi";
import MemberList from "../../components/organisms/list/MemberList";

const MemberListPage = () => {
  return (
    <>
      <Statistics
        getter={MemberApi.getMemberStatistic}
        name="memberStatistics"
        infos={[
          { title: "전체 회원", name: "memberCntTotal" },
          { title: "신규(일)", name: "latestMemberCntPerDay" },
          { title: "신규(월)", name: "latestMemberCntPerMonth" },
          { title: "신규(년)", name: "latestMemberCntPerYear" },
        ]}
      />
      <MemberList />
    </>
  );
};

export default MemberListPage;
