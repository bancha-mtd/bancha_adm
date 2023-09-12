import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";

type Props = {
  title: string;
  number: number;
};

const StatisticCell = React.memo((props: Props) => {
  return (
    <Flex
      width="100%"
      height="100%"
      gap="0"
      direction="column"
      align="space-around">
      <Text>{props.title}</Text>
      <Text color="grey" fontSize={5} mobilefontsize={3}>
        {props.number.toLocaleString()}
      </Text>
    </Flex>
  );
});

export default StatisticCell;
