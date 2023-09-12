import React, { useState } from "react";
import { styled } from "styled-components";
import Flex from "../Layouts/Flex";

type Props = {
  name?: string;
  width?: string;
  height?: string;
  gap?: string;
  align?: "start" | "space-between" | "space-around" | "center" | "end";
  list: string[];
  value: any;
  onChange: any;
};

const Radio = ({
  name = "Radio",
  width = "150px",
  height = "30px",
  gap = "10px",
  align = "start",
  list,
  value,
  onChange,
}: Props) => {
  const [sel, setSel] = useState(value);
  const select = (e: any) => {
    setSel(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Flex width={width} height={height} gap={gap} align={align}>
      {list.map((item: string) => {
        return (
          <Label key={`RadioItem_${name}_${item}`}>
            <input
              type="radio"
              name={name}
              value={item}
              checked={item === sel}
              onChange={select}
            />
            {item}
          </Label>
        );
      })}
    </Flex>
  );
};

const Label = styled.label`
  font-size: 1rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default Radio;
