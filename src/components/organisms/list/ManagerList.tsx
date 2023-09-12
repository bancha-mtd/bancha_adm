import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";
import Flex from "../../atoms/Layouts/Flex";
import ManagerListItem from "../../molecules/listitem/ManagerListItem";
import Modal from "../../atoms/Layouts/Modal";
import Text from "../../atoms/Text/Text";
import ManagerApi from "../../../libs/apis/ManagerApi";

const ManagerList = () => {
  const [modalText, setModalText] = useState("");
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await ManagerApi.getManagerList(searchOption);
    if (res.status === 200) {
      console.log(res.data);
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["getManagerList", searchOption],
    fetcher
  );

  const search = useCallback((tgt: string, query: string) => {
    let temp: any = {
      pageNum: 1,
      pageSize: 10,
    };
    if (query !== "") {
      if (tgt === "닉네임") temp["nickname"] = query;
      else if (tgt === "소속") temp["department"] = query;
    }
    setSearchOption(temp);
  }, []);

  const editManger = useCallback(async (val: any) => {
    await ManagerApi.editManager(val.id, val.authType, val.department).then(
      (res) => {
        if (res.status === 200) {
          setModalText(`${val.nickname} 관리자가 수정되었어요`);
        } else {
          setModalText("수정에 실패했어요...");
        }
      }
    );
  }, []);
  const deleteManger = useCallback(async (val: any) => {
    await ManagerApi.deleteManager(val.id).then((res) => {
      if (res.status === 200) {
        setModalText(`${val.nickname} 관리자가 삭제되었어요`);
      } else {
        setModalText("삭제에 실패했어요...");
      }
    });
  }, []);

  return (
    <ListWrapper>
      {modalText !== "" && (
        <Modal
          type={2}
          closeModal={() => {
            setModalText("");
          }}>
          <Text
            color={modalText === "수정에 실패했어요..." ? "orange" : "green"}>
            {modalText}
          </Text>
        </Modal>
      )}
      <Flex align="space-between">
        <Search target={["닉네임", "소속"]} submit={search} />
      </Flex>
      <Panel>
        <ListHead
          titles={["ID", "닉네임", "이메일", "등급", "소속", "상태", ""]}
          sizes={["10%", "10%", "20%", "15%", "15%", "10%", "20%"]}
          clickable={Array(7).fill(false)}
          changeSort={() => {}}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return (
              <ManagerListItem
                key={`manager_${item.id}`}
                manager={item}
                edit={editManger}
                del={deleteManger}
              />
            );
          })}
      </Panel>

      <PageChanger
        pageNum={searchOption["pageNum"]}
        maxPage={maxPage}
        setPageNum={(page: number) => {
          setSearchOption({ ...searchOption, pageNum: page });
        }}
      />
    </ListWrapper>
  );
};

export default ManagerList;
