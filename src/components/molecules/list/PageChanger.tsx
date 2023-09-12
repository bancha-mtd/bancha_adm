import React, { useState } from "react";
import Flex from "../../atoms/Layouts/Flex";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";

type Props = {
  pageNum: number;
  maxPage: number;
  setPageNum: (page: number) => void;
};

const PageChanger = ({ pageNum, maxPage, setPageNum }: Props) => {
  const [page, setPage] = useState(pageNum);
  return (
    <Flex width="100%" align="center" gap="10px">
      {pageNum !== 1 ? (
        <Button
          onClick={() => {
            if (pageNum > 1) {
              setPageNum(pageNum - 1);
              setPage(pageNum - 1);
            }
          }}
          width="50px">
          <img
            src={"/left-black.png"}
            alt="left-arrow"
            width={30}
            height={30}
          />
        </Button>
      ) : (
        <Text width="50px">ㅤ</Text>
      )}
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          if (0 < page && page <= maxPage) {
            setPageNum(page);
          } else {
            alert("Invalid Page Number");
          }
        }}>
        <Input
          value={page}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let x = parseInt(e.target.value);
            setPage(isNaN(x) ? 0 : x);
          }}
          backgroundcolor="transparent"
          width="30px"
          border={false}
        />
      </form>
      {pageNum !== maxPage ? (
        <Button
          onClick={() => {
            if (pageNum === maxPage) {
              return;
            }
            setPageNum(pageNum + 1);
            setPage(pageNum + 1);
          }}
          width="50px">
          <img
            src={"/right-black.png"}
            alt="right-arrow"
            width={30}
            height={30}
          />
        </Button>
      ) : (
        <Text width="50px">ㅤ</Text>
      )}
    </Flex>
  );
};

export default PageChanger;
