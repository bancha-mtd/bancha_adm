import React, { useState } from "react";
import { styled } from "styled-components";

type Props = {
  width?: string;
  height?: string;
  list: string[];
  value: any;
  onChange: any;
};

const Select = ({
  width = "150px",
  height = "30px",
  list,
  value,
  onChange,
}: Props) => {
  const [clicked, setClicked] = useState(false);
  const select = (e: any) => {
    onChange(e.target.innerText);
    setClicked(false);
  };

  return (
    <Wrapper width={width} height={height}>
      <Text
        width="100%"
        height={height}
        onClick={() => {
          setClicked(!clicked);
        }}>
        {value}
      </Text>
      {clicked && (
        <Ul>
          {list.map((item: string, idx: number) => {
            return (
              <Li
                key={`select_option_${item}`}
                top={idx === 0 ? "true" : "false"}
                width="100%"
                height={height}
                onClick={select}>
                {item}
              </Li>
            );
          })}
        </Ul>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: visible;
  position: relative;
`;

const Text = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  border: 1px solid grey;
  text-align: center;
  font-size: 1rem;
`;

const Ul = styled.ul`
  width: 100%;
  list-style-type: none;
  border: 1px solid grey;
  animation: openModal 0.5s ease;
  z-index: 500;
  position: absolute;
`;
const Li = styled.li<{ width: string; height: string; top: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: white;
  ${(props) => (props.top === "true" ? "" : "border-top: 1px solid black;")}
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export default Select;
