import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import { Link } from "react-router-dom";

type Props = {
  member: any;
};

const MemberListItem = ({ member }: Props) => {
  return (
    <Flex height="50px">
      <Text width="10%">
        <Link to={`/adm/member/${member.id}`}>{member.id}</Link>
      </Text>
      <Flex width="20%" direction="column" gap="0px">
        <Link to={`/adm/member/${member.id}`}>
          <Text>{member.nickName}</Text>
          <Text color="grey">({member.userId})</Text>
        </Link>
      </Flex>
      <Text width="10%">{member.ceoName}</Text>
      <Text width="10%">{member.phoneNumber}</Text>
      <Text width="10%">
        {typeof member.reviewCnt === "number"
          ? member.reviewCnt.toLocaleString()
          : member.reviewCnt}
      </Text>
      <Text width="10%">
        {typeof member.buyCnt === "number"
          ? member.buyCnt.toLocaleString()
          : member.buyCnt}
      </Text>
      <Text width="10%">{member.state ? "정상" : "삭제"}</Text>
      <Text width="10%">{member.state ? "정상" : "삭제"}</Text>
    </Flex>
  );
};

export default MemberListItem;
