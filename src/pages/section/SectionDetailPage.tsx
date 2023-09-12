import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import SectionApi from "../../libs/apis/SectionApi";
import Text from "../../components/atoms/Text/Text";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Modal from "../../components/atoms/Layouts/Modal";
import Panel from "../../components/atoms/Layouts/Panel";
import Subtitle from "../../components/atoms/Text/Subtitle";
import Button from "../../components/atoms/Button/Button";
import TitledRow from "../../components/molecules/detail/TitledRow";
import Input from "../../components/atoms/Input/Input";
import { Section } from "../../libs/Interfaces";
import Select from "../../components/atoms/Select/Select";
import Radio from "../../components/atoms/Radio/Radio";
import ProductFinder from "../../components/organisms/product/ProductFinder";

const SectionDetailPage = () => {
  const { id } = useParams();
  const sectionFetcher = async () => {
    const res = await SectionApi.getSectionDetail(id!);
    console.log(res.data);
    let ids: number[] = [];
    res.data.products.forEach((item: any) => {
      ids.push(item.id);
    });
    setProductInfos(res.data.products);
    setItem({
      title: res.data.title,
      priority: res.data.priority,
      layout: res.data.layout,
      backgroundColor: res.data.backgroundColor,
      useYn: res.data.useYn,
      products: ids,
      remark: "",
    });
    return res;
  };
  const sectionDetail = useSWR(["getSectionDetail", id], sectionFetcher, {
    revalidateOnFocus: false,
  });

  const [item, setItem] = useState<Section>({
    title: "",
    priority: 0,
    remark: "",
    layout: 0,
    backgroundColor: "",
    useYn: true,
    products: [],
  });
  const [productInfos, setProductInfos] = useState<
    { id: number; title: string }[]
  >([]);
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addProductToList = (e: { id: number; title: string }) => {
    if (item.products.includes(e.id)) return;
    setProductInfos([...productInfos, e]);
    setItem({ ...item, products: [...item.products, e.id] });
  };
  const removeProductFromList = (e: { id: number; title: string }) => {
    setProductInfos(productInfos.filter((item) => item.id !== e.id));
    setItem({
      ...item,
      products: item.products.filter((item) => item !== e.id),
    });
  };

  const editSection = async () => {
    console.log(item);
    SectionApi.editSection({ ...item, id: id }).then((res) => {
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("섹션이 수정되었어요");
      } else {
        setOpenModal("수정에 실패했어요...");
      }
    });
  };
  const addSection = async () => {
    setIsLoading(true);
    console.log("add", item);
    SectionApi.addSection(item).then((res) => {
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("섹션이 등록되었어요");
      } else {
        setOpenModal("등록에 실패했어요...");
      }
    });
  };

  return (
    <article>
      {sectionDetail.isLoading && <Text>Loading...</Text>}
      {sectionDetail.isValidating && <Spinner />}
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
      {sectionDetail.isLoading === false && (
        <Panel>
          <Subtitle isTop={true}>
            기본 정보
            <Button
              onClick={id !== "add" ? editSection : addSection}
              color="black">
              {id !== "add" ? "수정" : "등록"}
            </Button>
          </Subtitle>
          {id !== "add" && (
            <TitledRow title="ID">
              <Text>{id}</Text>
            </TitledRow>
          )}
          <TitledRow title="제목">
            <Input
              width="calc(100% - 190px)"
              color="orange"
              value={item.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, title: e.target.value });
              }}
            />
          </TitledRow>
          <TitledRow title="순서">
            <Input
              width="100px"
              align="center"
              value={item.priority}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                let x = parseInt(e.target.value);
                setItem({ ...item, priority: isNaN(x) ? 0 : x });
              }}
            />
          </TitledRow>
          <TitledRow title="레이아웃">
            <Select
              list={["1", "2", "3", "4", "5"]}
              value={item.layout}
              onChange={(e: string) => {
                setItem({ ...item, layout: parseInt(e) });
              }}
            />
          </TitledRow>
          <TitledRow title="노출">
            <Radio
              list={["노출", "숨김"]}
              value={item.useYn ? "노출" : "숨김"}
              onChange={(val: string) => {
                if (val === "노출") setItem({ ...item, useYn: true });
                else setItem({ ...item, useYn: false });
              }}
            />
          </TitledRow>
          <TitledRow title="배경색">
            <Input
              type="color"
              width="100px"
              value={item.backgroundColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, backgroundColor: e.target.value });
              }}
            />
          </TitledRow>
          <Subtitle>상품</Subtitle>
          <TitledRow title="상품">
            <ProductFinder
              addProductToList={addProductToList}
              removeProductFromList={removeProductFromList}
              selectedProducts={productInfos}
            />
          </TitledRow>
        </Panel>
      )}
    </article>
  );
};

export default SectionDetailPage;
