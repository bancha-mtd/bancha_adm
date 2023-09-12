import React, { useCallback } from "react";
import useSWR from "swr";
import MainApi from "../../../libs/apis/MainApi";
import Panel from "../../atoms/Layouts/Panel";
import Flex from "../../atoms/Layouts/Flex";
import StatisticCell from "../../molecules/statistics/StatisticCell";
import Modal from "../../atoms/Layouts/Modal";
import Spinner from "../../atoms/Spinner/Spinner";

const MainStatistics = () => {
  const fetcher = useCallback(async () => {
    const res = await MainApi.getMainStatistics();
    return res;
  }, []);
  const { data, isLoading } = useSWR(["getMainStatistics"], fetcher);

  return (
    <Panel height="200px">
      {isLoading && (
        <Modal type={4}>
          <Spinner />
        </Modal>
      )}
      {isLoading === false && (
        <Flex height="100%" align="space-between">
          <StatisticCell
            title="예약건수"
            number={data.data.statistics.reservationCnt}
          />
          <StatisticCell
            title="방문자수"
            number={data.data.statistics.visitCnt}
          />
          <StatisticCell
            title="신규회원"
            number={data.data.statistics.latestUserCnt}
          />
          <StatisticCell
            title="신규파트너"
            number={data.data.statistics.latestPartnerCnt}
          />
        </Flex>
      )}
    </Panel>
  );
};

export default MainStatistics;
