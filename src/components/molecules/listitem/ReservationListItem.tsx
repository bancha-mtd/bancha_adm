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
      <Text width="5%" color={reservation.isCancel ? 'orange' : 'black'}>
        <Link to={`/adm/reservation/${reservation.id}`}>{reservation.id}</Link>
      </Text>
      <Text width="15%" color={reservation.isCancel ? 'orange' : 'black'}>
        <Link to={`/adm/reservation/${reservation.id}`}>
          {reservation.reservationNum}
        </Link>
      </Text>
      {/* <Text width="10%">{reservation.createTime.substr(0, 9)}</Text> */}
      <Text width="10%" color={reservation.isCancel ? 'orange' : 'black'}>
        {reservation.paidAt.replace("T", " ").split(".")[0]}
      </Text>
      <Text width="5%" color={reservation.isCancel ? 'orange' : 'black'}>{reservation.isCancel ? "취소" : "결제"}</Text>
      <Text width="10%" color={reservation.isCancel ? 'orange' : 'black'}>{reservation.reservationDate}</Text>
      <Flex direction="column" gap="10px" width="15%">
        <Text color={reservation.isCancel ? 'orange' : 'black'}>{reservation.memberNickName}</Text>
        <Text color={reservation.isCancel ? 'orange' : 'grey'}>{reservation.phoneNumber}</Text>
      </Flex>
      <Text width="20%" color={reservation.isCancel ? 'orange' : 'black'}>{reservation.productTitle}</Text>
      <Text width="10%" color={reservation.isCancel ? 'orange' : 'black'}>
        {typeof reservation.amount === "number"
          ? reservation.amount.toLocaleString()
          : reservation.amount}
      </Text>
    </Flex>
  );
};

export default ReservationListItem;
