import React from "react";
import styled from "styled-components";

type Props = {
  type?: "text" | "email" | "color" | "datetime-local" | "date" | "password";
  name?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  width?: string;
  mobilewidth?: string;
  height?: string;
  border?: boolean;
  bordercolor?: string;
  color?: "black" | "green" | "orange" | "green" | "grey" | "white";
  backgroundcolor?: string;
  fontSize?: number;
  mobilefontsize?: number;
  align?: "start" | "center" | "end";
};

const Input = ({
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  width = "20dvw",
  mobilewidth = "80dvw",
  height = "30px",
  border = true,
  bordercolor = "black",
  color = "black",
  backgroundcolor = "white",
  fontSize = 1,
  mobilefontsize = 0.5,
  align = "start",
}: Props) => {
  return (
    <Inp
      className={`${color}-text`}
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      border={border ? "1px solid" : "0"}
      bordercolor={bordercolor}
      color={color}
      backgroundcolor={backgroundcolor}
      width={width}
      mobilewidth={mobilewidth}
      height={height}
      fontSize={fontSize}
      mobilefontsize={mobilefontsize}
      align={align}></Inp>
  );
};

const Inp = styled.input<{
  width: string;
  mobilewidth: string;
  height: string;
  border: string;
  bordercolor: string;
  backgroundcolor: string;
  fontSize: number;
  mobilefontsize: number;
  align: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.height !== "auto" ? `line-height: ${props.height};` : "")}
  border: ${(props) => props.border};
  border-color: ${(props) => props.bordercolor};
  background-color: ${(props) => props.backgroundcolor};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize}rem;
  text-align: ${(props) => props.align};
  @media (max-width: 700px) {
    width: ${(props) => props.mobilewidth};
    font-size: ${(props) => props.mobilefontsize}rem;
  }
`;

export default Input;
