import React, { useState } from "react";
import useSWR from "swr";
import Modal from "../../atoms/Layouts/Modal";
import Spinner from "../../atoms/Spinner/Spinner";
import Panel from "../../atoms/Layouts/Panel";
import Subtitle from "../../atoms/Text/Subtitle";
import Button from "../../atoms/Button/Button";
import TitledRow from "../../molecules/detail/TitledRow";
import Flex from "../../atoms/Layouts/Flex";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import ProductApi from "../../../libs/apis/ProductApi";

type Props = { id: string };

const ProductOption = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [options, setOptions] = useState<string[][]>([[], [], []]);
  const [optionLists, setOptionLists] = useState<any[]>([]);
  const [selDate, setSelDate] = useState(new Date());

  const optionFetcher = async () => {
    console.log(
      `${selDate.getFullYear()}-${
        selDate.getMonth() + 1 >= 10
          ? selDate.getMonth() + 1
          : "0" + (selDate.getMonth() + 1)
      }-${
        selDate.getDate() >= 10 ? selDate.getDate() : "0" + selDate.getDate()
      }`
    );
    const response = await ProductApi.getProductOption(
      id,
      `${selDate.getFullYear()}-${
        selDate.getMonth() + 1 >= 10
          ? selDate.getMonth() + 1
          : "0" + (selDate.getMonth() + 1)
      }-${
        selDate.getDate() >= 10 ? selDate.getDate() : "0" + selDate.getDate()
      }`
    );

    let tempOption: string[][] = [[], [], []];
    response.data.options.forEach((item: any) => {
      let temp = item.title.split(" > ");
      temp.forEach((option: string, idx: number) => {
        if (!tempOption[idx].includes(option)) tempOption[idx].push(option);
      });
    });
    setOptions(tempOption);
    setOptionLists(response.data.options);
    console.log("option", tempOption);

    console.log(response.data);
    return response;
  };
  const opt = useSWR(
    `${selDate.getFullYear()}-${
      selDate.getMonth() + 1 >= 10
        ? selDate.getMonth() + 1
        : "0" + (selDate.getMonth() + 1)
    }-${selDate.getDate()}`,
    optionFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const makeTable = () => {
    let temp = [];
    if (options.length === 1) {
      temp = options[0];
    } else if (options.length === 2) {
      for (let i = 0; i < options[0].length; i++) {
        for (let j = 0; j < options[1].length; j++) {
          temp.push(options[0][i] + ">" + options[1][j]);
        }
      }
    } else {
      for (let i = 0; i < options[0].length; i++) {
        for (let j = 0; j < options[1].length; j++) {
          for (let k = 0; k < options[2].length; k++) {
            temp.push(
              options[0][i] + ">" + options[1][j] + ">" + options[2][k]
            );
          }
        }
      }
    }
    setOptionLists(temp);
  };
  const editOption = () => {};
  const editIndividualOption = async (data: any) => {
    // setIsLoading(true);
    await ProductApi.editIndividualOption(data).then((res) => {
      console.log(res);
      // setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("옵션이 수정되었어요");
      } else {
        setOpenModal("수정에 실패했어요...");
      }
    });
  };

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
      <Panel>
        <Subtitle isTop={true}>
          옵션
          {/* <Button onClick={editOption} color="black">
            수정
          </Button> */}
        </Subtitle>
        {/* <TitledRow title="옵션">
          <Flex
            direction="column"
            width="calc(100% - 170px)"
            crossalign="start"
            padding="10px 0 10px 0">
            {options.map((lst: string[], idx: number) => {
              return (
                <Flex
                  key={`productOptionTitle_${idx}`}
                  crossalign="start"
                  padding="10px 0 10px 0">
                  <Input
                    width="200px"
                    value={titles[idx]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...titles];
                      temp[idx] = e.target.value;
                      setTitles(temp);
                    }}
                  />
                  <Flex direction="column" gap="10px" crossalign="start">
                    {lst.map((option: string, i: number) => {
                      return (
                        <Flex key={`productOption_${idx}_${i}`}>
                          <Input
                            width="700px"
                            value={option}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              let temp = [...options];
                              temp[idx][i] = e.target.value;
                              setOptions(temp);
                            }}
                          />
                          <Button
                            color="grey"
                            onClick={() => {
                              let temp = [...options];
                              temp[idx] = temp[idx].filter(
                                (item) => item !== option
                              );
                              setOptions(temp);
                            }}>
                            -
                          </Button>
                        </Flex>
                      );
                    })}
                    <Button
                      color="grey"
                      onClick={() => {
                        let temp = [...options];
                        temp[idx].push("");
                        setOptions(temp);
                      }}>
                      +
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
            <Button color="green" onClick={makeTable}>
              테이블 생성
            </Button>
            <Flex gap="10px" direction="column" width="100%">
              <Flex width="100%">
                <Text width="70%" color="green">
                  옵션
                </Text>
                <Text width="10%" color="orange">
                  옵션 추가 가격
                </Text>
                <Text width="10%" color="orange">
                  재고
                </Text>
              </Flex>
              {optionLists.map((opt, idx: number) => {
                return (
                  <Flex width="100%">
                    <Input
                      width="70%"
                      color="green"
                      value={opt.title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        let temp = [...optionLists];
                        temp[idx].title = e.target.value;
                        setOptionLists(temp);
                      }}
                    />
                    <Input
                      width="10%"
                      align="center"
                      color="orange"
                      value={opt.optionPrice.toLocaleString()}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        let temp = [...optionLists];
                        let x = parseInt(e.target.value.replaceAll(",", ""));
                        temp[idx].optionPrice = isNaN(x) ? 0 : x;
                        setOptionLists(temp);
                      }}
                    />
                    <Input
                      width="10%"
                      align="center"
                      color="orange"
                      value={opt.optionStock.toLocaleString()}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        let temp = [...optionLists];
                        let x = parseInt(e.target.value.replaceAll(",", ""));
                        temp[idx].optionStock = isNaN(x) ? 0 : x;
                        setOptionLists(temp);
                      }}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </TitledRow> */}
        <TitledRow title="날짜별 재고 설정">
          <Flex
            gap="10px"
            direction="column"
            width="100%"
            crossalign="start"
            padding="10px 0 10px 0">
            <Flex gap="10px">
              <Text color="green">{selDate.toLocaleDateString()}</Text>
              <Input
                width="40px"
                type="date"
                color="green"
                value={selDate.toLocaleDateString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSelDate(new Date(e.target.value));
                }}
              />
            </Flex>
            <Flex width="100%">
              <Text width="70%" color="green">
                옵션
              </Text>
              <Text width="10%" color="orange">
                옵션 추가 가격
              </Text>
              <Text width="10%" color="orange">
                재고
              </Text>
            </Flex>
            {optionLists.map((opt, idx: number) => {
              return (
                <Flex width="100%" key={`OptionList_${idx}`}>
                  <Input
                    width="70%"
                    color="green"
                    value={opt.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...optionLists];
                      temp[idx].title = e.target.value;
                      setOptionLists(temp);
                    }}
                  />
                  <Input
                    width="10%"
                    align="center"
                    color="orange"
                    value={opt.optionPrice.toLocaleString()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...optionLists];
                      let x = parseInt(e.target.value.replaceAll(",", ""));
                      temp[idx].optionPrice = isNaN(x) ? 0 : x;
                      setOptionLists(temp);
                    }}
                  />
                  <Input
                    width="10%"
                    align="center"
                    color="orange"
                    value={opt.optionStock.toLocaleString()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...optionLists];
                      let x = parseInt(e.target.value.replaceAll(",", ""));
                      temp[idx].optionStock = isNaN(x) ? 0 : x;
                      setOptionLists(temp);
                    }}
                  />
                  <Button
                    onClick={() => {
                      editIndividualOption(opt);
                    }}
                    color="green">
                    수정
                  </Button>
                </Flex>
              );
            })}
          </Flex>
        </TitledRow>
      </Panel>
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
    </article>
  );
};

export default ProductOption;
