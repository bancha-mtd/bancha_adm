import React from "react";
import Statistics from "../../components/organisms/statistics/Statistics";
import PartnerList from "../../components/organisms/list/PartnerList";
import PartnerApi from "../../libs/apis/PartnerApi";

const PartnerListPage = () => {
  return (
    <>
      <Statistics
        name="partnerStatistics"
        getter={PartnerApi.getPartnerStatistic}
        infos={[
          { title: "전체 파트너", name: "partnerCntTotal" },
          { title: "신규(일)", name: "latestPartnerCntPerDay" },
          { title: "신규(월)", name: "latestPartnerCntPerMonth" },
          { title: "신규(년)", name: "latestPartnerCntPerYear" },
        ]}
      />
      <PartnerList />
    </>
  );
};

export default PartnerListPage;
