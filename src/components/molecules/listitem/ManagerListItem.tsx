import React, { useState } from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import { ManagerGrade } from "../../../libs/Constants";
import Input from "../../atoms/Input/Input";

type Props = {
  manager: any;
  edit: any;
  del: any;
};

const ManagerListItem = ({ manager, edit, del }: Props) => {
  const [item, setItem] = useState<any>(manager);

  return (
    <Flex height="50px">
      <Text width="10%">{manager.id}</Text>
      <Text width="10%">{manager.nickname}</Text>
      <Text width="20%">{manager.userId}</Text>
      <Select
        list={ManagerGrade}
        value={ManagerGrade[item.authType - 1]}
        onChange={(e: string) => {
          if (e === "최고관리자") setItem({ ...item, authType: 1 });
          else if (e === "중간관리자") setItem({ ...item, authType: 2 });
          else if (e === "일반관리자") setItem({ ...item, authType: 3 });
        }}
        width="15%"
      />
      <Input
        align="center"
        width="15%"
        value={item.department}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItem({ ...item, department: e.target.value });
        }}
      />
      <Text width="10%">{manager.useYn ? "정상" : "삭제"}</Text>
      <Flex width="20%">
        <Button
          color="green"
          onClick={() => {
            edit(item);
          }}>
          수정
        </Button>
        <Button
          color="orange"
          onClick={() => {
            del(item);
          }}>
          삭제
        </Button>
      </Flex>
    </Flex>
  );
};

export default React.memo(ManagerListItem);
