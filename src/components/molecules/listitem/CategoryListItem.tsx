import React, { useEffect, useRef, useState } from "react";
import Flex from "../../atoms/Layouts/Flex";
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Radio from "../../atoms/Radio/Radio";
import styled from "styled-components";

type Props = {
  category: any;
  edit: any;
  editIcon: any;
};

const CategoryListItem = ({ category, edit, editIcon }: Props) => {
  const inpRef = useRef<HTMLInputElement>(null);
  const [item, setItem] = useState<any>(category);
  const [icon, setIcon] = useState<Blob>();
  const fetchIcon = async () => {
    setIcon(await fetch(category.thumbnailImageUrl).then((r) => r.blob()));
  };
  useEffect(() => {
    if (category.thumbnailImageUrl !== null) {
      fetchIcon();
    }
  }, []);

  return (
    <Flex height="50px">
      <Text width="15%">{category.id}</Text>
      <Input
        align="center"
        width="25%"
        value={item.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItem({ ...item, name: e.target.value });
        }}
      />
      <Text width="15%">{category.productCount}</Text>
      <Radio
        name={category.name}
        align="center"
        width="15%"
        list={["Y", "N"]}
        value={item.useYn ? "Y" : "N"}
        onChange={(val: string) => {
          if (val === "Y") setItem({ ...item, useYn: true });
          else setItem({ ...item, useYn: false });
        }}
      />
      <Input
        align="center"
        width="15%"
        value={item.recommendNum}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          let x = parseInt(e.target.value);
          setItem({ ...item, recommendNum: isNaN(x) ? 0 : x });
        }}
      />
      <Flex width="15%" align="center">
        <Button
          width="15%"
          onClick={() => {
            inpRef.current?.click();
          }}>
          {icon && (
            <img
              width={30}
              height={30}
              src={URL.createObjectURL(icon)}
              alt="icon"
            />
          )}
          <Inp
            ref={inpRef}
            type="file"
            name="icons"
            onChange={(e) => {
              setIcon(e.target.files![0]);
              editIcon(e.target.files![0], item);
            }}
          />
        </Button>
      </Flex>
      <Flex width="15%" align="center">
        <Button
          color="green"
          onClick={() => {
            edit(item);
          }}>
          수정
        </Button>
      </Flex>
    </Flex>
  );
};

const Inp = styled.input`
  display: none;
`;

export default CategoryListItem;
