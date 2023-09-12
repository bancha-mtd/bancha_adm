import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import useSWR from "swr";
import DaumPostcodeEmbed from "react-daum-postcode";
import { BankList } from "../../libs/Constants";
import PartnerApi from "../../libs/apis/PartnerApi";
import ProductApi from "../../libs/apis/ProductApi";
import Modal from "../../components/atoms/Layouts/Modal";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Text from "../../components/atoms/Text/Text";
import Flex from "../../components/atoms/Layouts/Flex";
import Button from "../../components/atoms/Button/Button";
import Panel from "../../components/atoms/Layouts/Panel";
import TitledCell from "../../components/molecules/detail/TitledCell";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import Textarea from "../../components/atoms/Textarea/Textarea";
import ImageUploader from "../../components/atoms/Input/ImageUploader";

const PartnerDetailPage = () => {
  const { id } = useParams();
  const partnerFetcher = async () => {
    if (id === "add") return;
    // const response = await Hooks.getPart
  };
  const partnerDetail = useSWR(["getProductDetail", id], partnerFetcher, {
    revalidateOnFocus: false,
  });
  const additionalFetcher = async () => {
    const response = await ProductApi.getProductForm();
    if (response.status === 200) {
      setManagers(response.data.managers);
    }
    return response;
  };
  const addtioanlData = useSWR(["getAddtionalData"], additionalFetcher, {
    revalidateOnFocus: false,
  });

  const [item, setItem] = useState<any>({
    partnerId: "",
    bizName: "",
    ceoName: "",
    managerId: 0,
    certification: true,
    bizNumber: "",
    bankNumber: "",
    subTitle: "",
    description: "",
    cellphone: "",
    address: "",
    pees: 0,
    useYn: true,
    remark: "",
  });
  const [pw, setPw] = useState("");
  const [selBank, setSelBank] = useState("");
  const [postNum, setPostNum] = useState("");
  const [sigungu, setSigungu] = useState("");
  const [profileImg, setProfileImg] = useState<Blob>();
  const [partnerImgs, setPartnerImgs] = useState<Blob[]>([]);
  const [managers, setManagers] = useState<any>({});
  const [openManagerSelect, setOpenManagerSelect] = useState(false);
  const [openAddrFinder, setOpenAddrFinder] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const selectManager = (id: number) => {
    setItem({ ...item, managerId: id });
    setOpenManagerSelect(false);
  };
  const selectOthImgs = (file: Blob[]) => {
    setPartnerImgs([...partnerImgs, ...file]);
  };
  const deleteOthImg = (idx: number) => {
    setPartnerImgs(partnerImgs.filter((item: Blob, i: number) => idx !== i));
  };
  useEffect(() => {
    let panel = document.querySelector(".panel");
    if (panel) {
      panel.scrollTop =
        panel?.scrollHeight === undefined ? 0 : panel.scrollHeight;
    }
  }, [openAddrFinder]);

  const addPartner = async () => {
    setIsLoading(true);
    const pr = {
      partnerId: item.partnerId,
      password: pw,
      bizName: item.bizName,
      ceoName: item.ceoName,
      managerId: item.managerId,
      certification: false,
      bizNumber: item.bizNumber,
      bankNumber: `${selBank} ${item.bankNumber}`,
      subTitle: item.subTitle,
      description: item.description,
      cellphone: item.cellphone,
      address: item.address,
      pees: item.pees,
      useYn: true,
      remark: "",
    };

    console.log(pr);
    console.log("profileImg", profileImg);
    console.log("partnerImg", partnerImgs);

    let frm = new FormData();
    frm.append(
      "partner",
      new Blob([JSON.stringify(pr)], { type: "application/json" })
    );
    if (profileImg !== undefined) {
      frm.append("profileImg", profileImg!);
    }

    partnerImgs.forEach((value: Blob) => {
      frm.append("partnerImg", value);
    });

    PartnerApi.addPartner(frm).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.status === 200) {
        setOpenModal("파트너가 등록되었어요");
      } else {
        setOpenModal("등록에 실패했어요...");
      }
    });
  };
  const editPartner = async () => {};

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
          파트너 정보
        </Text>
        <Button color="black" onClick={id === "add" ? addPartner : editPartner}>
          {id === "add" ? "등록" : "수정"}
        </Button>
      </Flex>
      <Panel>
        <Flex gap="0">
          {id !== "add" && (
            <TitledCell borderradius="20px 0 0 0" title="ID">
              <Text>{id}</Text>
            </TitledCell>
          )}
          <TitledCell
            borderradius={id === "add" ? "20px 0 0 0" : "0"}
            title="이메일">
            <Input
              width="calc(100% - 160px)"
              color="orange"
              value={item.partnerId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, partnerId: e.target.value });
              }}
            />
          </TitledCell>
          <TitledCell title="닉네임">
            <Input
              width="200px"
              color="green"
              align="center"
              value={item.bizName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, bizName: e.target.value });
              }}
            />
          </TitledCell>
          {id === "add" && (
            <TitledCell title="비밀번호">
              <Input
                type="password"
                width="calc(100% - 160px)"
                value={pw}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPw(e.target.value);
                }}
              />
            </TitledCell>
          )}
        </Flex>
        <Flex gap="0">
          <TitledCell title="등급">
            {/* <Input
              width="calc(100% - 160px)"
              color="orange"
              value={item.partnerId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, partnerId: e.target.value });
              }}
            /> */}
          </TitledCell>
          <TitledCell title="대표자">
            <Input
              width="200px"
              color="green"
              align="center"
              value={item.ceoName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, ceoName: e.target.value });
              }}
            />
          </TitledCell>
          <TitledCell title="담당자">
            <div style={{ position: "relative" }}>
              <Button
                color="black"
                type="border"
                width="150px"
                onClick={() => {
                  setOpenManagerSelect(!openManagerSelect);
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
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell title="수수료">
            <Flex gap="5px">
              <Input
                width="50px"
                color="orange"
                align="center"
                value={item.pees}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let x = parseInt(e.target.value);
                  setItem({
                    ...item,
                    pees: isNaN(x) ? 0 : x,
                  });
                }}
              />
              <Text color="orange">%</Text>
            </Flex>
          </TitledCell>
          <TitledCell title="사업자등록번호">
            <Input
              width="calc(100% - 160px)"
              align="center"
              value={item.bizNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, bizNumber: e.target.value });
              }}
            />
          </TitledCell>
          <TitledCell title="계좌">
            <Flex
              width="calc(100% - 160px)"
              direction="column"
              gap="10px"
              crossalign="start">
              <Select
                list={BankList}
                value={selBank}
                onChange={(e: string) => {
                  setSelBank(e);
                }}
              />
              <Input
                width="100%"
                align="center"
                value={item.bankNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({ ...item, bankNumber: e.target.value });
                }}
              />
            </Flex>
          </TitledCell>
        </Flex>
        <Flex gap="0">
          <TitledCell title="연락처">
            <Flex
              width="calc(100% - 160px)"
              direction="column"
              gap="10px"
              crossalign="start">
              <Input
                width="100%"
                value={item.cellphone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setItem({ ...item, cellphone: e.target.value });
                }}
              />
            </Flex>
          </TitledCell>
          <TitledCell title="유선전화">
            {/* <Input
              width="200px"
              color="green"
              align="center"
              value={item.bizName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, bizName: e.target.value });
              }}
            /> */}
          </TitledCell>
          {id !== "add" && (
            <TitledCell title="가입일자">
              {/* <Text>{ item.crea}</Text> */}
            </TitledCell>
          )}
        </Flex>
        <Flex gap="0">
          <TitledCell borderradius="0 0 0 20px" title="우편번호">
            <Flex width="calc(100% - 160px)" direction="column" gap="10px">
              <Flex width="100%">
                <Button
                  color="green"
                  width="150px"
                  onClick={() => {
                    setOpenAddrFinder(!openAddrFinder);
                  }}>
                  {postNum}
                </Button>
                <Input
                  width="150px"
                  align="center"
                  value={sigungu}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSigungu(e.target.value);
                  }}
                />
              </Flex>
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
                      width: "100%",
                      height: "500px",
                      marginBottom: "20px",
                    }}
                    animation={true}
                    autoClose={true}
                    onComplete={(data) => {
                      setItem({
                        ...item,
                        // remark: data.zonecode,
                        // addr: data.sigungu,
                        address: data.address,
                      });
                      setPostNum(data.zonecode);
                      setSigungu(data.sigungu);
                    }}
                  />
                </div>
              )}
            </Flex>
          </TitledCell>
          <TitledCell title="주소">
            <Input
              width="calc(100% - 160px)"
              value={item.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItem({ ...item, address: e.target.value });
              }}
            />
          </TitledCell>
        </Flex>
      </Panel>

      {id !== "add" && (
        <Flex height="100px" padding="50px 0 0 0">
          <Text fontSize={1.3} mobilefontsize={1} fontWeight="bold">
            등록 상품
          </Text>
        </Flex>
      )}
      {id !== "add" && (
        <Panel>
          <Flex gap="0">
            <TitledCell borderradius="20px 0 0 20px" title="상품수">
              sad
            </TitledCell>
            <TitledCell title="후기수">sad</TitledCell>
            <TitledCell title="판매수">sad</TitledCell>
          </Flex>
        </Panel>
      )}

      <Flex height="100px" padding="50px 0 0 0">
        <Text fontSize={1.3} mobilefontsize={1} fontWeight="bold">
          파트너 소개
        </Text>
      </Flex>
      <Panel>
        <TitledCell borderradius="20px 0 0 0" title="제목" width="100%">
          <Input
            width="calc(100% - 160px)"
            color="orange"
            value={item.subTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, subTitle: e.target.value });
            }}
          />
        </TitledCell>
        <TitledCell
          borderradius="0 0 0 20px"
          title="설명"
          width="100%"
          height="340px">
          <Textarea
            width="calc(100% - 160px)"
            height="300px"
            color="green"
            value={item.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setItem({ ...item, description: e.target.value });
            }}
          />
        </TitledCell>
      </Panel>

      <Flex height="100px" padding="50px 0 0 0">
        <Text fontSize={1.3} mobilefontsize={1} fontWeight="bold">
          파트너 이미지
        </Text>
      </Flex>
      <Panel>
        <TitledCell
          borderradius="20px 0 0 0"
          title="프로필"
          width="100%"
          height="220px">
          {profileImg !== undefined ? (
            <a href={URL.createObjectURL(profileImg)} target="_blank">
              <img
                src={URL.createObjectURL(profileImg)}
                alt="detail"
                width={200}
                height={200}
              />
            </a>
          ) : (
            <Text>Invalid Image</Text>
          )}
          <Flex direction="column" align="center">
            <Text color="grey">이미지를 클릭하면 새 탭에서 볼 수 있어요</Text>
            <ImageUploader
              onChange={(e) => {
                setProfileImg(e.target.files[0]);
              }}
              multiple={false}
              height="30px"
            />
          </Flex>
        </TitledCell>
        <TitledCell
          borderradius="0 0 0 20px"
          title="파트너 이미지"
          width="100%"
          height="220px">
          {partnerImgs.map((item: Blob, idx: number) => {
            return (
              <Button
                key={`${id}_partnerImg_${idx}`}
                width="200px"
                height="200px"
                onClick={() => {
                  deleteOthImg(idx);
                }}>
                <img
                  src={URL.createObjectURL(item)}
                  alt="partnerImg"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </Button>
            );
          })}
          {partnerImgs.length < 5 && (
            <ImageUploader
              onChange={(e) => {
                selectOthImgs(e.target.files);
              }}
            />
          )}
        </TitledCell>
      </Panel>
    </article>
  );
};

const Ul = styled.ul`
  z-index: 500;
  max-height: 20dvh;
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

export default PartnerDetailPage;
