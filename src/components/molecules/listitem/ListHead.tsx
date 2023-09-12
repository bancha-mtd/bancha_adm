import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

type Props = {
  sizes: string[];
  titles: string[];
  clickable: boolean[];
  changeSort: (e: string) => void;
};

const ListHead = ({ sizes, titles, clickable, changeSort }: Props) => {
  return (
    <Flex height="50px">
      {titles.map((title: string, idx: number) => {
        return clickable[idx] ? (
          <Button
            key={`ListHead_${title}`}
            type="border"
            onClick={() => {
              changeSort(title);
            }}
            width={sizes[idx]}>
            {title}
          </Button>
        ) : (
          <Text key={`ListHead_${title}`} width={sizes[idx]}>
            {title}
          </Text>
        );
      })}
    </Flex>
  );
};

export default React.memo(ListHead);
