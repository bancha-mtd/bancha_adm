import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import { Link } from "react-router-dom";
import { PartnerGrade } from "../../../libs/Constants";

type Props = {
  partner: any;
};

const PartnerListItem = ({ partner }: Props) => {
  return (
    <Flex height="50px">
      <Text width="10%">
        <Link to={`/adm/partner/${partner.id}`}>{partner.id}</Link>
      </Text>
      <Flex width="20%" direction="column" gap="0px">
        <Link to={`/adm/partner/${partner.id}`}>
          <Text>{partner.nickName}</Text>
          <Text color="grey">({partner.userId})</Text>
        </Link>
      </Flex>
      <Text width="10%">{PartnerGrade[partner.grade]}</Text>
      <Text width="10%">{partner.ceoName}</Text>
      <Text width="10%">{partner.phoneNumber}</Text>
      <Text width="10%">
        {typeof partner.reviewCnt === "number"
          ? partner.reviewCnt.toLocaleString()
          : partner.reviewCnt}
      </Text>
      <Text width="10%">
        {typeof partner.saleCnt === "number"
          ? partner.saleCnt.toLocaleString()
          : partner.saleCnt}
      </Text>
      <Text width="10%">
        {typeof partner.productCnt === "number"
          ? partner.productCnt.toLocaleString()
          : partner.productCnt}
      </Text>
      <Text width="10%">{partner.state ? "정상" : "삭제"}</Text>
    </Flex>
  );
};

export default React.memo(PartnerListItem);
