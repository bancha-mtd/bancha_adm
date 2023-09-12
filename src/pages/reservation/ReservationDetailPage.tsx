import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ReservationApi from "../../libs/apis/ReservationApi";
import Modal from "../../components/atoms/Layouts/Modal";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Flex from "../../components/atoms/Layouts/Flex";
import Text from "../../components/atoms/Text/Text";
import Panel from "../../components/atoms/Layouts/Panel";
import TitledCell from "../../components/molecules/detail/TitledCell";

const ReservationDetailPage = () => {
  const { id } = useParams();
  const reservationFetcher = async () => {
    const res = await ReservationApi.getReservationDetail(id!);
    console.log(res.data);
    setItem(res.data);
    return res;
  };
  const reservationDetail = useSWR(
    ["getReservationDetail", id],
    reservationFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const [item, setItem] = useState<any>({
    ownerInfo: { email: "", nickName: "", phoneNumber: "" },
    paymentDetail: {
      applyNum: "",
      merchantUid: "",
      paidAmount: 0,
      paidAt: "",
      payMethod: "",
    },
    paymentSummary: { paidAmount: 0, productPrice: 0, usedPoint: 0 },
    summary: {
      cancelReason: "",
      optionTitle: "",
      productId: -1,
      reservationDate: "",
      reservationNum: "",
      reservationOption: [],
      reviewId: -1,
      status: -1,
      thumbnail: "",
      title: "",
      totalPrice: 0,
    },
  });
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <article>
      {isLoading && (
        <Modal
          type={4}
          closeModal={() => {
            setIsLoading(false);
          }}>
          <Spinner />
        </Modal>
      )}
      {openModal !== "" && (
        <Modal
          type={2}
          closeModal={() => {
            setOpenModal("");
          }}>
          <Text
            height="30px"
            color={openModal === "수정에 실패했어요..." ? "orange" : "green"}>
            {openModal}
          </Text>
        </Modal>
      )}
      <Flex align="space-between" height="50px">
        <Text fontSize={1.3} mobilefontsize={1} fontWeight="bold">
          예약 정보
        </Text>
      </Flex>
      <Panel>
        <Flex gap="0">
          <TitledCell borderradius="20px 0 0 0" title="ID">
            <Text>{id}</Text>
          </TitledCell>
          <TitledCell title="예약 번호">
            <Text color="orange">{item.summary.reservationNum}</Text>
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell title="예약자">
            <Text color="green">{item.ownerInfo.nickName}</Text>
          </TitledCell>
          <TitledCell title="예약 이메일">
            <Text>{item.ownerInfo.email}</Text>
          </TitledCell>
          <TitledCell title="예약 전화번호">
            <Text>{item.ownerInfo.phoneNumber}</Text>
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell title="결제일시">
            <Text>{item.paymentDetail.paidAt}</Text>
          </TitledCell>
          <TitledCell title="결제방법">
            <Text>{item.paymentDetail.payMethod}</Text>
          </TitledCell>
          <TitledCell title="결제금액/포인트">
            <Text>
              {item.paymentSummary.paidAmount.toLocaleString()}원/
              {item.paymentSummary.usedPoint.toLocaleString()}p
            </Text>
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell title="상품명" width="100%">
            <Text>{item.summary.title}</Text>
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell borderradius="0 0 0 20px" title="예약일">
            <Text color="orange">{item.summary.reservationDate}</Text>
          </TitledCell>
          <TitledCell title="선택옵션">
            <Flex direction="column" gap="10px" width="66.6666%">
              {item.summary.reservationOption.map((opt: any, idx: number) => {
                return (
                  <Text key={`opt_${idx}`} color="orange">
                    {opt.optionName}
                  </Text>
                );
              })}
            </Flex>
          </TitledCell>
        </Flex>
      </Panel>
    </article>
  );
};

export default ReservationDetailPage;
