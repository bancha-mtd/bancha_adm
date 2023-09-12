import React from "react";
import { styled } from "styled-components";

type Props = {
  placeholder?: string;
  value: any;
  onChange: any;
  width?: string;
  mobilewidth?: string;
  height?: string;
  border?: boolean;
  bordercolor?: string;
  color?: "black" | "green" | "orange" | "green" | "grey" | "white";
  fontSize?: number;
  mobilefontsize?: number;
};

const Textarea = ({
  placeholder = "",
  value,
  onChange,
  width = "20dvw",
  mobilewidth = "80dvw",
  height = "30px",
  border = true,
  bordercolor = "black",
  color = "black",
  fontSize = 1,
  mobilefontsize = 0.5,
}: Props) => {
  return (
    <Ta
      className={`${color}-text`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      border={border ? "1px solid" : "0"}
      bordercolor={bordercolor}
      color={color}
      width={width}
      mobilewidth={mobilewidth}
      height={height}
      fontSize={fontSize}
      mobilefontsize={mobilefontsize}></Ta>
  );
};

const Ta = styled.textarea<{
  width: string;
  mobilewidth: string;
  height: string;
  border: string;
  bordercolor: string;
  fontSize: number;
  mobilefontsize: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: 150%;
  border: ${(props) => props.border};
  border-color: ${(props) => props.bordercolor};
  padding: 10px;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize}rem;
  @media (max-width: 700px) {
    width: ${(props) => props.mobilewidth};
    font-size: ${(props) => props.mobilefontsize}rem;
  }
`;

export default Textarea;
