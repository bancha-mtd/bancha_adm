import React, { useCallback, useState } from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Panel from "../../atoms/Layouts/Panel";
import Input from "../../atoms/Input/Input";
import Modal from "../../atoms/Layouts/Modal";
import Spinner from "../../atoms/Spinner/Spinner";
import TitledRow from "../../molecules/detail/TitledRow";
import CategoryApi from "../../../libs/apis/CategoryApi";
import Radio from "../../atoms/Radio/Radio";
import ImageUploader from "../../atoms/Input/ImageUploader";

const CategoryAdd = () => {
  const [item, setItem] = useState<any>({
    name: "",
    recommendNum: 0,
    remark: "",
    useYn: true,
  });
  const [icon, setIcon] = useState<Blob>();
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = useCallback(() => {
    setItem({
      name: "",
      recommendNum: 0,
      remark: "",
      useYn: true,
    });
  }, []);

  const addCategory = async () => {
    if (!icon) {
      setOpenModal("아이콘을 등록해주세요");
      return;
    }
    setIsLoading(true);
    let frm = new FormData();
    frm.append("files", icon);
    frm.append(
      "requestDTO",
      new Blob([JSON.stringify(item)], { type: "application/json" })
    );
    CategoryApi.addCategory(frm).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("카테고리가 등록되었어요");
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
        <Button color="black" onClick={addCategory}>
          추가
        </Button>
      </Flex>
      <Panel>
        <TitledRow title="카테고리명">
          <Input
            width="300px"
            color="green"
            value={item.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, name: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="노출여부">
          <Radio
            name={"addCategory"}
            list={["Y", "N"]}
            value={item.useYn ? "Y" : "N"}
            onChange={(val: string) => {
              if (val === "Y") setItem({ ...item, useYn: true });
              else setItem({ ...item, useYn: false });
            }}
          />
        </TitledRow>
        <TitledRow title="순서">
          <Input
            width="100px"
            align="center"
            value={item.recommendNum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let x = parseInt(e.target.value);
              setItem({ ...item, recommendNum: isNaN(x) ? 0 : x });
            }}
          />
        </TitledRow>
        <TitledRow title="아이콘">
          <Flex padding="10px 0">
            {icon && (
              <img
                width={150}
                height={150}
                src={URL.createObjectURL(icon)}
                alt="icon"
              />
            )}
            <ImageUploader
              width="150px"
              height="150px"
              onChange={(e: any) => {
                setIcon(e.target.files![0]);
              }}
            />
          </Flex>
        </TitledRow>
      </Panel>
    </article>
  );
};

export default CategoryAdd;
