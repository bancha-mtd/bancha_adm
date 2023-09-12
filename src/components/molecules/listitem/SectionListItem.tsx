import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import { Link } from "react-router-dom";

type Props = {
  section: any;
};

const SectionListItem = ({ section }: Props) => {
  return (
    <Flex height="50px">
      <Text width="15%">
        <Link to={`/adm/section/${section.id}`}>{section.id}</Link>
      </Text>
      <Flex width="40%" direction="column" gap="0px">
        <Link to={`/adm/section/${section.id}`}>
          <Text>{section.title}</Text>
        </Link>
      </Flex>
      <Text width="15%">{section.priority}</Text>
      <Text width="15%">{section.productCnt}</Text>
      <Text width="15%">{section.useYn ? "T" : "F"}</Text>
    </Flex>
  );
};

export default SectionListItem;
