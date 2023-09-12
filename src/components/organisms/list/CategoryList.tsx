import React, { useCallback, useState } from "react";
import useSWR from "swr";
import Search from "../common/Search";
import ListWrapper from "../../atoms/Layouts/ListWrapper";
import Panel from "../../atoms/Layouts/Panel";
import ListHead from "../../molecules/listitem/ListHead";
import Spinner from "../../atoms/Spinner/Spinner";
import PageChanger from "../../molecules/list/PageChanger";
import Flex from "../../atoms/Layouts/Flex";
import Modal from "../../atoms/Layouts/Modal";
import Text from "../../atoms/Text/Text";
import CategoryApi from "../../../libs/apis/CategoryApi";
import CategoryListItem from "../../molecules/listitem/CategoryListItem";

const CategoryList = () => {
  const [modalText, setModalText] = useState("");
  const [maxPage, setMaxPage] = useState(10);
  const [searchOption, setSearchOption] = useState<any>({
    pageNum: 1,
    pageSize: 10,
  });
  const fetcher = async () => {
    const res = await CategoryApi.getCategoryList(searchOption);
    if (res.status === 200) {
      setMaxPage(res.data.totalPages);
    }
    return res;
  };
  const { data, isLoading, isValidating } = useSWR(
    ["getCategoryList", searchOption],
    fetcher
  );

  const search = useCallback((tgt: string, query: string) => {
    let temp: any = {
      pageNum: 1,
      pageSize: 10,
    };
    if (query !== "") {
      if (tgt === "카테고리명") temp["title"] = query;
      else if (tgt === "노출") {
        if (query === "Y" || query === "y") temp["useYn"] = true;
        else if (query === "N" || query === "n") temp["useYn"] = false;
      }
    }
    setSearchOption(temp);
  }, []);

  const editCategory = useCallback(async (val: any) => {
    await CategoryApi.editCategory(val).then((res) => {});
    let option = {
      id: val.id,
      name: val.name,
      recommendNum: val.recommendNum,
      useYn: val.useYn,
    };
    CategoryApi.editCategory(option).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setModalText(`${val.name} 카테고리가 수정되었어요`);
      } else {
        setModalText("수정에 실패했어요...");
      }
    });
  }, []);

  const editCategoryIcon = useCallback(async (file: Blob, val: any) => {
    let frm = new FormData();
    frm.append("files", file, `${val.id}_${val.name}`);
    CategoryApi.editCategoryImg(val.id, frm).then((res) => {
      if (res.status === 200) {
        setModalText(`${val.name} 아이콘이 수정되었어요`);
      } else {
        setModalText("수정에 실패했어요...");
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
        <Search target={["카테고리명", "노출여부"]} submit={search} />
      </Flex>
      <Panel>
        <ListHead
          titles={[
            "ID",
            "카테고리명",
            "상품수",
            "노출여부",
            "순위",
            "아이콘",
            "",
          ]}
          sizes={["15%", "25%", "15%", "15%", "15%", "15%", "15%"]}
          clickable={Array(7).fill(false)}
          changeSort={() => {}}
        />
        {(isLoading || isValidating) && <Spinner height="550px" />}
        {isLoading === false &&
          data.status === 200 &&
          data.data.content.map((item: any) => {
            return (
              <CategoryListItem
                key={`category_${item.id}`}
                category={item}
                edit={editCategory}
                editIcon={editCategoryIcon}
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

export default CategoryList;
