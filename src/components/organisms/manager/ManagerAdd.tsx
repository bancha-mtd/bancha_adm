import React, { useCallback, useEffect, useState } from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Panel from "../../atoms/Layouts/Panel";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";
import Modal from "../../atoms/Layouts/Modal";
import Spinner from "../../atoms/Spinner/Spinner";
import TitledRow from "../../molecules/detail/TitledRow";
import { ManagerGrade } from "../../../libs/Constants";
import ManagerApi from "../../../libs/apis/ManagerApi";

const ManagerAdd = () => {
  const [item, setItem] = useState<any>({
    userid: "",
    passwd: "",
    name: "",
    type: 0,
    remark: "",
    department: "",
    useYn: true,
  });
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectType = (e: string) => {
    if (e === "최고관리자") setItem({ ...item, type: 1 });
    else if (e === "중간관리자") setItem({ ...item, type: 2 });
    else setItem({ ...item, type: 3 });
  };
  const departments = ["경영", "개발", "디자인", "프로덕트"];
  const selectDepartment = (e: string) => {
    setItem({ ...item, department: e });
  };
  const reset = useCallback(() => {
    setItem({
      userid: "",
      passwd: "",
      name: "",
      type: 0,
      remark: "",
      department: "",
      useYn: true,
    });
  }, []);

  const addManger = async () => {
    setIsLoading(true);
    ManagerApi.addManager(item).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("관리자가 등록되었어요");
        reset();
      } else {
        setOpenModal("등록에 실패했어요...");
      }
    });
  };

  return (
    <article style={{ marginBottom: "20px" }}>
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
            color={openModal === "등록에 실패했어요..." ? "orange" : "green"}>
            {openModal}
          </Text>
        </Modal>
      )}
      <Flex align="space-between" height="50px">
        <Text fontSize={1.3} mobilefontsize={1} fontWeight="bold">
          관리자 추가
        </Text>
        <Button color="black" onClick={addManger}>
          추가
        </Button>
      </Flex>
      <Panel>
        <TitledRow title="이메일">
          <Input
            width="300px"
            color="orange"
            value={item.userid}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, userid: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="비밀번호">
          <Input
            type="password"
            width="300px"
            value={item.passwd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, passwd: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="닉네임">
          <Input
            width="100px"
            align="center"
            color="orange"
            value={item.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, name: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="권한">
          <Select
            list={ManagerGrade}
            value={ManagerGrade[item.type - 1]}
            onChange={selectType}
          />
        </TitledRow>
        <TitledRow title="소속">
          <Select
            list={departments}
            value={item.department}
            onChange={selectDepartment}
          />
        </TitledRow>
      </Panel>
    </article>
  );
};

export default ManagerAdd;
