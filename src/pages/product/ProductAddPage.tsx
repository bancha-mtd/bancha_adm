import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { styled } from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";
import ProductApi from "../../libs/apis/ProductApi";
import Modal from "../../components/atoms/Layouts/Modal";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Panel from "../../components/atoms/Layouts/Panel";
import Subtitle from "../../components/atoms/Text/Subtitle";
import Button from "../../components/atoms/Button/Button";
import TitledRow from "../../components/molecules/detail/TitledRow";
import Radio from "../../components/atoms/Radio/Radio";
import Input from "../../components/atoms/Input/Input";
import Flex from "../../components/atoms/Layouts/Flex";
import Text from "../../components/atoms/Text/Text";
import Textarea from "../../components/atoms/Textarea/Textarea";
import ImageUploader from "../../components/atoms/Input/ImageUploader";
import CheckBox from "../../components/atoms/CheckBox/CheckBox";

const ProductAddPage = () => {
  const additionalFetcher = async () => {
    const response = await ProductApi.getProductForm();
    console.log(response.data);
    // console.log(Object.entries(response.data.managers));
    setManagers(response.data.managers);
    setPartners(response.data.bizNames);
    setCategories(response.data.categoryNames);
    setRefundTypes(response.data.refundTypes);
    return response;
  };
  const addtioanlData = useSWR(["getAddtionalData"], additionalFetcher, {
    revalidateOnFocus: false,
  });
  const [item, setItem] = useState<any>({
    addr: "",
    address: "",
    afterPrice: 0,
    autoConfirm: "true",
    basicUserInfo: "",
    checkList: "",
    createtime: "",
    exclude: "",
    facilities: "",
    id: 0,
    include: "",
    isBanchaPlaning: true,
    label: "",
    latitude: "",
    longitude: "",
    manualLabel: "",
    managerId: 0,
    maxAge: 0,
    minAge: 0,
    partnerId: 0,
    postNum: "",
    prePrice: 0,
    productImageUrl: "",
    productText: "",
    programContentText: "",
    programSummary: "",
    random_show: true,
    recommendAge: "",
    refundTypeId: 1,
    remark: "",
    reservationDay: "1111111",
    subTitle: "",
    target: "kids",
    thumbnail01: "",
    title: "",
    useMinute: 0,
    useYn: true,
  });
  const [selCategories, setSelCategories] = useState([0, 0, 0]);
  const [managers, setManagers] = useState<any>({});
  const [openManagerSelect, setOpenManagerSelect] = useState(false);
  const [partners, setPartners] = useState<any>({});
  const [openPartnerSelect, setOpenPartnerSelect] = useState(false);
  const [categories, setCategories] = useState<any>({});
  const [openCategorySelect, setOpenCategorySelect] = useState([
    false,
    false,
    false,
  ]);
  const targets: any = {
    kids: "키즈",
    kidsFamily: "키즈패밀리",
    parents: "부모",
  };
  const [openTargetSelect, setOpenTargetSelect] = useState(false);
  const [refundTypes, setRefundTypes] = useState<any>({});
  const [openRefundSelect, setOpenRefundSelect] = useState(false);
  const [thumbnails, setThumbnails] = useState<Blob[]>([]);
  const [detailImage, setDetailImage] = useState<Blob>();
  const [openAddrFinder, setOpenAddrFinder] = useState(false);
  const [excludingDateList, setExcludingDateList] = useState("");
  const [peopleStandard, setPeopleStandard] = useState("");
  const [minPeople, setMinPeople] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [optionTitles, setOptionTitles] = useState<string[]>([]);
  const [options, setOptions] = useState<string[][]>([[], [], []]);
  const [optionList, setOptionList] = useState<any[]>([]);
  const [addiOptionList, setAddiOptionList] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectManager = (id: number) => {
    setItem({ ...item, managerId: id });
    setOpenManagerSelect(false);
  };
  const selectPartner = (id: number) => {
    setItem({ ...item, partnerId: id });
    setOpenPartnerSelect(false);
  };
  const selectCategory = (idx: number, id: number) => {
    let temp = selCategories;
    temp[idx] = id;
    setSelCategories(temp);
    setOpenCategorySelect([false, false, false]);
  };
  const selectTarget = (tgt: string) => {
    setItem({ ...item, target: tgt });
    setOpenTargetSelect(false);
  };
  const selectRefundType = (id: number) => {
    setItem({ ...item, refundTypeId: id });
    setOpenRefundSelect(false);
  };
  useEffect(() => {
    let panel = document.querySelector(".panel");
    if (panel) {
      panel.scrollTop =
        panel?.scrollHeight === undefined ? 0 : panel.scrollHeight;
    }
  }, [openRefundSelect, openAddrFinder]);
  const selectThumbnail = (file: Blob[]) => {
    setThumbnails([...thumbnails, ...file]);
  };
  const deleteThumbnail = (idx: number) => {
    setThumbnails(thumbnails.filter((item: Blob, i: number) => idx !== i));
  };
  const makeTable = () => {
    let tempOptionList: any[] = [];

    if (options[1].length === 0 && options[2].length === 0) {
      options[0].forEach((optionValue: string, idx: number) => {
        tempOptionList.push({
          optionValue: optionValue,
          price: 0,
          stock: 0,
          seq: idx,
        });
      });
    } else if (options[2].length === 0) {
      for (let i = 0; i < options[0].length; i++) {
        for (let j = 0; j < options[1].length; j++) {
          tempOptionList.push({
            optionValue: options[0][i] + " > " + options[1][j],
            price: 0,
            stock: 0,
            seq: j,
          });
        }
      }
    } else {
      for (let i = 0; i < options[0].length; i++) {
        for (let j = 0; j < options[1].length; j++) {
          for (let k = 0; k < options[2].length; k++) {
            tempOptionList.push({
              optionValue:
                options[0][i] + " > " + options[1][j] + " > " + options[2][k],
              price: 0,
              stock: 0,
              seq: j,
            });
          }
        }
      }
    }
    console.log(tempOptionList);

    setOptionList(tempOptionList);
  };

  const addProduct = async () => {
    setIsLoading(true);
    const pr = {
      partnerId: item.partnerId,
      title: item.title,
      subTitle: item.subTitle,
      basicUserInfo: `${peopleStandard} 기준 ${minPeople}인 ~ ${maxPeople}인`,
      autoConfirm: item.autoConfirm,
      reservationDay: item.reservationDay,
      facilities: item.facilities,
      address: item.address,
      postNum: item.postNum,
      addr: item.addr,
      programContentText: item.programContentText,
      include: item.include,
      exclude: item.exclude,
      recommendAge: item.recommendAge,
      productText: item.productText,
      useYn: item.useYn,
      remark: "",
      useMinute: item.useMinute,
      checkList: item.checkList,
      latitude: item.latitude,
      longitude: item.longitude,
      refundTypeId: item.refundTypeId,
      prePrice: item.prePrice,
      afterPrice: item.afterPrice,
      maxAge: item.maxAge,
      minAge: item.minAge,
      managerId: item.managerId,
      manualLabel: item.manualLabel,
      programSummary: item.programSummary,
      target: item.target,
      isBanchaPlaning: true,
      isDiscounted: item.prePrice === item.afterPrice,
      randomShow: item.random_show,
    };

    console.log("req", {
      categoryIds: selCategories,
      product: pr,
      excludingDateList:
        excludingDateList === "" ? null : excludingDateList.split(","),
      saleList: { optionTitleKeys: optionTitles, options: optionList },
      additionalOptionList: addiOptionList,
    });
    console.log("productDescriptionImg", detailImage);
    console.log("thumbnailImages", thumbnails);

    let frm = new FormData();
    frm.append(
      "req",
      new Blob(
        [
          JSON.stringify({
            categoryIds: selCategories,
            product: pr,
            excludingDateList:
              excludingDateList === "" ? null : excludingDateList.split(","),
            saleList: { optionTitleKeys: optionTitles, options: optionList },
            additionalOptionList: addiOptionList,
          }),
        ],
        { type: "application/json" }
      )
    );
    if (detailImage !== undefined) {
      frm.append("productDescriptionImg", detailImage!);
    }

    thumbnails.forEach((value: Blob) => {
      frm.append("thumbnailImages", value);
    });

    ProductApi.addProduct(frm).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("상품이 등록되었어요");
      } else {
        setOpenModal("등록에 실패했어요...");
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
        <Subtitle>
          기본 정보
          <Button onClick={addProduct} color="black">
            등록
          </Button>
        </Subtitle>
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
        <TitledRow title="담당자">
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="150px"
              onClick={() => {
                setOpenManagerSelect(!openManagerSelect);
                setOpenPartnerSelect(false);
                setOpenCategorySelect([false, false, false]);
                setOpenTargetSelect(false);
                setOpenRefundSelect(false);
              }}>
              {managers[item.managerId]}
            </Button>
            {openManagerSelect && (
              <Ul>
                {Object.entries(managers).map(
                  (manager: [string, any], idx: number) => {
                    return (
                      <Li
                        width="150px"
                        key={`${manager[0]}manager_${manager[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectManager(parseInt(manager[0]));
                        }}>
                        {manager[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
        </TitledRow>
        <TitledRow title="파트너">
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="200px"
              onClick={() => {
                setOpenPartnerSelect(!openPartnerSelect);
                setOpenManagerSelect(false);
                setOpenCategorySelect([false, false, false]);
                setOpenTargetSelect(false);
                setOpenRefundSelect(false);
              }}>
              {partners[item.partnerId]}
            </Button>
            {openPartnerSelect && (
              <Ul>
                {Object.entries(partners).map(
                  (partner: [string, any], idx: number) => {
                    return (
                      <Li
                        width="200px"
                        key={`${partner[0]}partner_${partner[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectPartner(parseInt(partner[0]));
                        }}>
                        {partner[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
        </TitledRow>
        <TitledRow title="카테고리">
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="200px"
              onClick={() => {
                setOpenCategorySelect([!openCategorySelect[0], false, false]);
                setOpenManagerSelect(false);
                setOpenPartnerSelect(false);
                setOpenTargetSelect(false);
                setOpenRefundSelect(false);
              }}>
              {categories[selCategories[0]]}
            </Button>
            {openCategorySelect[0] && (
              <Ul>
                {Object.entries(categories).map(
                  (category: [string, any], idx: number) => {
                    return (
                      <Li
                        width="200px"
                        key={`0_${category[0]}category_${category[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectCategory(0, parseInt(category[0]));
                        }}>
                        {category[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="200px"
              onClick={() => {
                setOpenCategorySelect([false, !openCategorySelect[1], false]);
                setOpenManagerSelect(false);
                setOpenPartnerSelect(false);
                setOpenTargetSelect(false);
                setOpenRefundSelect(false);
              }}>
              {categories[selCategories[1]]}
            </Button>
            {openCategorySelect[1] && (
              <Ul>
                {Object.entries(categories).map(
                  (category: [string, any], idx: number) => {
                    return (
                      <Li
                        width="200px"
                        key={`1_${category[0]}category_${category[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectCategory(1, parseInt(category[0]));
                        }}>
                        {category[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="200px"
              onClick={() => {
                setOpenCategorySelect([false, false, !openCategorySelect[2]]);
                setOpenManagerSelect(false);
                setOpenPartnerSelect(false);
                setOpenTargetSelect(false);
                setOpenRefundSelect(false);
              }}>
              {categories[selCategories[2]]}
            </Button>
            {openCategorySelect[2] && (
              <Ul>
                {Object.entries(categories).map(
                  (category: [string, any], idx: number) => {
                    return (
                      <Li
                        width="200px"
                        key={`2_${category[0]}category_${category[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectCategory(2, parseInt(category[0]));
                        }}>
                        {category[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
        </TitledRow>
        <TitledRow title="타겟">
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="150px"
              onClick={() => {
                setOpenTargetSelect(!openTargetSelect);
                setOpenManagerSelect(false);
                setOpenPartnerSelect(false);
                setOpenCategorySelect([false, false, false]);
                setOpenRefundSelect(false);
              }}>
              {targets[item.target]}
            </Button>
            {openTargetSelect && (
              <Ul>
                {Object.entries(targets).map(
                  (target: [string, any], idx: number) => {
                    return (
                      <Li
                        width="150px"
                        key={`${target[0]}target`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectTarget(target[0]);
                        }}>
                        {target[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
        </TitledRow>
        <TitledRow title="기획">
          <Radio
            list={["반차", "파트너"]}
            value={item.isBanchaPlaning ? "반차" : "파트너"}
            onChange={(val: string) => {
              if (val === "반차") setItem({ ...item, isBanchaPlaning: true });
              else setItem({ ...item, isBanchaPlaning: false });
            }}
          />
        </TitledRow>
        <TitledRow title="랜덤 상품">
          <Radio
            list={["Y", "N"]}
            value={item.random_show ? "Y" : "N"}
            onChange={(val: string) => {
              if (val === "Y") setItem({ ...item, random_show: "y" });
              else setItem({ ...item, random_show: "n" });
            }}
          />
        </TitledRow>
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
        <TitledRow title="부제목">
          <Input
            width="calc(100% - 190px)"
            color="green"
            value={item.subTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, subTitle: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="해쉬태그">
          <Input
            width="calc(100% - 190px)"
            value={item.facilities}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, facilities: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="가격">
          <Input
            width="150px"
            align="center"
            value={item.prePrice.toLocaleString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let x = parseInt(e.target.value.replaceAll(",", ""));
              setItem({
                ...item,
                prePrice: isNaN(x) ? 0 : x,
              });
            }}
          />
          <Flex gap="10px">
            <Text>최종가격</Text>
            <Input
              width="150px"
              align="center"
              value={item.afterPrice.toLocaleString()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                let x = parseInt(e.target.value.replaceAll(",", ""));
                setItem({
                  ...item,
                  afterPrice: isNaN(x) ? 0 : x,
                });
              }}
            />
            <Text color="grey">
              -
              {Math.round(
                ((item.prePrice - item.afterPrice) * 100) / item.prePrice
              )}
              %
            </Text>
          </Flex>
        </TitledRow>
        <TitledRow title="인원">
          <Flex gap="10px">
            <Input
              width="300px"
              align="center"
              value={peopleStandard}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPeopleStandard(e.target.value);
              }}
            />
            <Text>기준</Text>
          </Flex>
          <Flex gap="10px">
            <Input
              width="50px"
              align="center"
              value={minPeople}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMinPeople(e.target.value);
              }}
            />
            <Text>인</Text>
          </Flex>
          <Text>~</Text>
          <Flex gap="10px">
            <Input
              width="50px"
              align="center"
              value={maxPeople}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMaxPeople(e.target.value);
              }}
            />
            <Text>인</Text>
          </Flex>
        </TitledRow>
        <TitledRow title="자동 확정">
          <Radio
            width="auto"
            list={["자동 확정", "확정 대기"]}
            value={item.autoConfirm === "true" ? "자동 확정" : "확정 대기"}
            onChange={(val: string) => {
              if (val === "자동 확정") setItem({ ...item, autoConfirm: true });
              else setItem({ ...item, autoConfirm: false });
            }}
          />
        </TitledRow>
        <TitledRow title="소요 시간">
          <Flex gap="4px">
            <Input
              width="100px"
              align="center"
              value={item.useMinute}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({
                  ...item,
                  useMinute: parseInt(e.target.value),
                });
              }}
            />
            <Text>분</Text>
          </Flex>
        </TitledRow>
        <TitledRow title="연령">
          <Flex gap="4px">
            <Input
              width="50px"
              align="center"
              value={item.minAge}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                let x = parseInt(e.target.value);
                setItem({
                  ...item,
                  minAge: isNaN(x) ? 0 : x,
                });
              }}
            />
            <Text>~</Text>
            <Input
              width="50px"
              align="center"
              value={item.maxAge}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                let x = parseInt(e.target.value);
                setItem({
                  ...item,
                  maxAge: isNaN(x) ? 0 : x,
                });
              }}
            />
            <Text>세</Text>
          </Flex>
        </TitledRow>
        <TitledRow title="체험포인트">
          <Textarea
            width="calc(100% - 190px)"
            height="300px"
            color="green"
            value={item.programContentText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, programContentText: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="포함/불포함">
          <Flex
            direction="column"
            width="calc(100% - 190px)"
            gap="10px"
            height="90px"
            align="center">
            <Flex width="100%">
              <Text>포함</Text>
              <Input
                width="calc(100% - 70px)"
                value={item.include}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({
                    ...item,
                    include: e.target.value,
                  });
                }}
              />
            </Flex>
            <Flex width="100%">
              <Text width="50px">불포함</Text>
              <Input
                width="calc(100% - 70px)"
                value={item.exclude}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({
                    ...item,
                    exclude: e.target.value,
                  });
                }}
              />
            </Flex>
          </Flex>
        </TitledRow>
        <TitledRow title="공지사항">
          <Textarea
            width="calc(100% - 190px)"
            height="300px"
            color="green"
            value={item.checkList}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, checkList: e.target.value });
            }}
          />
        </TitledRow>
        <TitledRow title="라벨">
          <Input
            width="100px"
            align="center"
            value={item.manualLabel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({
                ...item,
                manualLabel: e.target.value,
              });
            }}
          />
          <Text color="grey">미사용 시 빈칸</Text>
        </TitledRow>
        <TitledRow title="썸네일">
          {thumbnails.map((item: Blob, idx: number) => {
            return (
              <Button
                key={`thumbnail_${idx}`}
                width="200px"
                height="200px"
                onClick={() => {
                  deleteThumbnail(idx);
                }}>
                <img
                  src={URL.createObjectURL(item)}
                  alt="thumbnail"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Button>
            );
          })}
          {thumbnails.length < 5 && (
            <ImageUploader
              onChange={(e) => {
                selectThumbnail(e.target.files);
              }}
            />
          )}
        </TitledRow>
        <Margin height="10" />
        <Subtitle>예약</Subtitle>
        <TitledRow title="예약 가능 요일">
          <CheckBox
            list={["월", "화", "수", "목", "금", "토", "일"]}
            value={item.reservationDay.split("")}
            chkedValue={"1"}
            nonChkedValue={"0"}
            onChange={(val: any) => {
              setItem({ ...item, reservationDay: val.join("") });
            }}
          />
        </TitledRow>
        <TitledRow title="예외 일정">
          <Input
            width="calc(100% - 190px)"
            color="orange"
            placeholder="20xx-00-00,20xx-00-00 형태로 작성해주세요"
            value={excludingDateList}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setExcludingDateList(e.target.value);
            }}
          />
        </TitledRow>
        <TitledRow title="옵션">
          <Flex
            direction="column"
            width="calc(100% - 190px)"
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
                    align="center"
                    value={optionTitles[idx]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...optionTitles];
                      temp[idx] = e.target.value;
                      setOptionTitles(temp);
                    }}
                  />
                  <Flex direction="column" gap="10px" crossalign="start">
                    {lst.map((option: string, i: number) => {
                      return (
                        <Flex key={`productOption_${idx}_${i}`}>
                          <Input
                            width="700px"
                            align="center"
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
                            color="orange"
                            type="border"
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
                      width="700px"
                      color="green"
                      type="border"
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
            <Button color="black" onClick={makeTable}>
              테이블 생성
            </Button>
            {optionList.length !== 0 && (
              <Flex gap="10px" direction="column" width="100%">
                <Flex width="100%" gap="2.5%">
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
                {optionList.map((opt, idx: number) => {
                  return (
                    <Flex width="100%" gap="2.5%" key={`optionList_${idx}`}>
                      <Input
                        width="70%"
                        color="green"
                        align="center"
                        value={opt.optionValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let temp = [...optionList];
                          temp[idx].optionValue = e.target.value;
                          setOptionList(temp);
                        }}
                      />
                      <Input
                        width="10%"
                        color="orange"
                        align="center"
                        value={opt.price.toLocaleString()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let temp = [...optionList];
                          let x = parseInt(e.target.value.replaceAll(",", ""));
                          temp[idx].price = isNaN(x) ? 0 : x;
                          setOptionList(temp);
                        }}
                      />
                      <Input
                        width="10%"
                        color="orange"
                        align="center"
                        value={opt.stock.toLocaleString()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let temp = [...optionList];
                          let x = parseInt(e.target.value.replaceAll(",", ""));
                          temp[idx].stock = isNaN(x) ? 0 : x;
                          setOptionList(temp);
                        }}
                      />
                      <Button
                        color="orange"
                        type="border"
                        onClick={() => {
                          let temp = [...optionList];
                          temp = temp.filter(
                            (item: any, i: number) => idx !== i
                          );
                          setOptionList(temp);
                        }}>
                        -
                      </Button>
                    </Flex>
                  );
                })}
              </Flex>
            )}
          </Flex>
        </TitledRow>
        <Divider />
        <TitledRow title="추가 옵션">
          <Flex
            direction="column"
            gap="10px"
            padding="10px 0 10px 0"
            width="calc(100% - 190px)">
            {optionList.length !== 0 && (
              <Flex width="100%" gap="2.5%">
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
            )}
            {addiOptionList.map((addiOption: any, idx: number) => {
              return (
                <Flex width="100%" gap="2.5%" key={`addiOptionList_${idx}`}>
                  <Input
                    width="70%"
                    color="green"
                    align="center"
                    value={addiOption.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...addiOptionList];
                      temp[idx].title = e.target.value;
                      setAddiOptionList(temp);
                    }}
                  />
                  <Input
                    width="10%"
                    color="orange"
                    align="center"
                    value={addiOption.price.toLocaleString()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...addiOptionList];
                      let x = parseInt(e.target.value.replaceAll(",", ""));
                      temp[idx].price = isNaN(x) ? 0 : x;
                      setAddiOptionList(temp);
                    }}
                  />
                  <Input
                    width="10%"
                    color="orange"
                    align="center"
                    value={addiOption.stock.toLocaleString()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let temp = [...addiOptionList];
                      let x = parseInt(e.target.value.replaceAll(",", ""));
                      temp[idx].stock = isNaN(x) ? 0 : x;
                      setAddiOptionList(temp);
                    }}
                  />
                  <Button
                    color="orange"
                    type="border"
                    onClick={() => {
                      let temp = [...addiOptionList];
                      temp = temp.filter((item: any, i: number) => idx !== i);
                      setAddiOptionList(temp);
                    }}>
                    -
                  </Button>
                </Flex>
              );
            })}
            <Button
              width="50px"
              color="green"
              type="border"
              onClick={() => {
                let temp = [...addiOptionList];
                temp.push({ title: "", price: 0, stock: 0 });
                setAddiOptionList(temp);
              }}>
              +
            </Button>
          </Flex>
        </TitledRow>
        <Subtitle>상세 페이지</Subtitle>
        <TitledRow title="상세 이미지">
          {detailImage !== undefined ? (
            <a href={URL.createObjectURL(detailImage)} target="_blank">
              <img
                src={URL.createObjectURL(detailImage)}
                alt="detail"
                width={200}
                height={200}
              />
            </a>
          ) : (
            <Text>Invalid Image</Text>
          )}
          <Flex direction="column" align="center" padding="10px 0 10px 0">
            <Text color="grey">이미지를 클릭하면 새 탭에서 볼 수 있어요</Text>
            <ImageUploader
              onChange={(e) => {
                setDetailImage(e.target.files[0]);
              }}
              multiple={false}
              height="30px"
            />
          </Flex>
        </TitledRow>
        <Subtitle>기본 정보</Subtitle>
        <TitledRow title="위치">
          <Flex
            direction="column"
            width="calc(100% - 190px)"
            gap="10px"
            height="90px"
            align="center">
            <Flex width="100%">
              <Button
                color="green"
                width="200px"
                onClick={() => {
                  setOpenAddrFinder(!openAddrFinder);
                }}>
                {item.postNum}
              </Button>
              <Input
                width="200px"
                align="center"
                value={item.addr}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({
                    ...item,
                    addr: e.target.value,
                  });
                }}
              />
            </Flex>
            <Input
              width="100%"
              value={item.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({
                  ...item,
                  address: e.target.value,
                });
              }}
            />
            {openAddrFinder && (
              <div
                style={{
                  position: "relative",
                  textAlign: "start",
                  width: "100%",
                }}>
                <DaumPostcodeEmbed
                  style={{
                    position: "absolute",
                    zIndex: 500,
                    width: "500px",
                    height: "500px",
                    marginBottom: "20px",
                  }}
                  animation={true}
                  autoClose={true}
                  onComplete={(data) => {
                    setItem({
                      ...item,
                      postNum: data.zonecode,
                      addr: data.sigungu,
                      address: data.address,
                    });
                  }}
                />
              </div>
            )}
          </Flex>
        </TitledRow>
        <TitledRow title="위/경도">
          <Flex direction="column" gap="10px" height="90px" align="center">
            <Flex>
              <Text>위도</Text>
              <Input
                width="250px"
                align="center"
                value={item.latitude}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({
                    ...item,
                    latitude: e.target.value,
                  });
                }}
              />
            </Flex>
            <Flex>
              <Text>경도</Text>
              <Input
                width="250px"
                align="center"
                value={item.longitude}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({
                    ...item,
                    longitude: e.target.value,
                  });
                }}
              />
            </Flex>
          </Flex>
        </TitledRow>
        <TitledRow title="환불 규정">
          <div style={{ position: "relative" }}>
            <Button
              color="black"
              type="border"
              width="200px"
              onClick={() => {
                setOpenRefundSelect(!openRefundSelect);
                setOpenManagerSelect(false);
                setOpenPartnerSelect(false);
                setOpenCategorySelect([false, false, false]);
                setOpenTargetSelect(false);
              }}>
              {refundTypes[item.refundTypeId]}
            </Button>
            {openRefundSelect && (
              <Ul>
                {Object.entries(refundTypes).map(
                  (refundType: [string, any], idx: number) => {
                    return (
                      <Li
                        width="200px"
                        key={`${refundType[0]}refundType_${refundType[1]}`}
                        top={idx === 0 ? "true" : "false"}
                        onClick={() => {
                          selectRefundType(parseInt(refundType[0]));
                        }}>
                        {refundType[1]}
                      </Li>
                    );
                  }
                )}
              </Ul>
            )}
          </div>
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

const Ul = styled.ul`
  z-index: 500;
  max-height: 30dvh;
  list-style-type: none;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
  animation: openModal 0.5s ease;
  position: absolute;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Li = styled.li<{ width: string; top: string }>`
  width: ${(props) => props.width};
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  ${(props) => (props.top === "true" ? "" : "border-top: 1px solid black;")}
  &:hover {
    background-color: grey;
    color: white;
  }
`;
const Margin = styled.div<{ height: string }>`
  height: ${(props) => props.height}px;
`;
const Divider = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 1px;
`;
export default ProductAddPage;
