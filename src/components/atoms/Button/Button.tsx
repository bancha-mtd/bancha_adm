import React from "react";
import "./Button.css";
import styled from "styled-components";

type Props = {
  type?: string;
  color?: "black" | "green" | "orange" | "green" | "grey" | "transparent";
  children: React.ReactNode;
  onClick: () => void;
  width?: string;
  mobilewidth?: string;
  height?: string;
  fontSize?: number;
  mobilefontsize?: number;
};

const Button = ({
  type = "bg",
  color = "transparent",
  children,
  onClick,
  width = "auto",
  mobilewidth = "80dvw",
  height = "30px",
  fontSize = 1,
  mobilefontsize = 0.5,
}: Props) => {
  return (
    <Btn
      className={`${type} ${color}-button`}
      onClick={onClick}
      width={width}
      mobilewidth={mobilewidth}
      height={height}
      fontSize={fontSize}
      mobilefontsize={mobilefontsize}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  mobilewidth: string;
  height: string;
  fontSize: number;
  mobilefontsize: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  vertical-align: middle;
  padding: 0 10px 0 10px;
  font-size: ${(props) => props.fontSize}rem;
  overflow: hidden;
  @media (max-width: 700px) {
    width: ${(props) => props.mobilewidth};
    font-size: ${(props) => props.mobilefontsize}rem;
  }
`;

export default Button;
