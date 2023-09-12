import React, { useCallback } from "react";
import useSWR from "swr";
import Panel from "../../atoms/Layouts/Panel";
import Flex from "../../atoms/Layouts/Flex";
import StatisticCell from "../../molecules/statistics/StatisticCell";
import Modal from "../../atoms/Layouts/Modal";
import Spinner from "../../atoms/Spinner/Spinner";

type Props = {
  getter: any;
  name: string;
  infos: { title: string; name: string }[];
};

const Statistics = React.memo(({ getter, name, infos }: Props) => {
  const fetcher = useCallback(async () => {
    return await getter();
  }, []);
  const { data, isLoading } = useSWR([name], fetcher);

  return (
    <article style={{ marginBottom: "20px" }}>
      <Panel height="calc(100dvh - 780px)" minHeight="150px">
        {isLoading && (
          <Modal type={4}>
            <Spinner />
          </Modal>
        )}
        {isLoading === false && (
          <Flex height="100%" align="space-between">
            {infos.map((item: { title: string; name: string }) => {
              return (
                <StatisticCell
                  key={`${item.title}`}
                  title={item.title}
                  number={
                    data.data[item.name] === undefined
                      ? 0
                      : data.data[item.name]
                  }
                />
              );
            })}
          </Flex>
        )}
      </Panel>
    </article>
  );
});

export default Statistics;
