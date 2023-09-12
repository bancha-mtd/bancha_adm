import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import { Link } from "react-router-dom";

type Props = {
  reservation: any;
};

const ReservationListItem = ({ reservation }: Props) => {
  return (
    <Flex height="50px">
      <Text width="5%">
        <Link to={`/adm/reservation/${reservation.id}`}>{reservation.id}</Link>
      </Text>
      <Text width="15%">
        <Link to={`/adm/reservation/${reservation.id}`}>
          {reservation.reservationNum}
        </Link>
      </Text>
      {/* <Text width="10%">{reservation.createTime.substr(0, 9)}</Text> */}
      <Text width="10%">
        {reservation.paidAt.replace("T", " ").split(".")[0]}
      </Text>
      <Text width="5%">{reservation.isCancel ? "취소" : "결제"}</Text>
      <Text width="10%">{reservation.reservationDate}</Text>
      <Flex direction="column" gap="10px" width="15%">
        <Text>{reservation.memberNickName}</Text>
        <Text color="grey">{reservation.phoneNumber}</Text>
      </Flex>
      <Text width="20%">{reservation.productTitle}</Text>
      <Text width="10%">
        {typeof reservation.amount === "number"
          ? reservation.amount.toLocaleString()
          : reservation.amount}
      </Text>
    </Flex>
  );
};

export default ReservationListItem;
