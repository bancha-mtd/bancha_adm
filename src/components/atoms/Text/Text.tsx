import React from "react";
import "./Text.css";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  color?: "black" | "green" | "orange" | "green" | "grey" | "white";
  width?: string;
  height?: string;
  align?: string;
  fontSize?: number;
  mobilefontsize?: number;
  fontWeight?: string;
};

const Text = ({
  children,
  color = "black",
  width = "auto",
  height = "auto",
  align = "center",
  fontSize = 1,
  mobilefontsize = 0.5,
  fontWeight = "normal",
}: Props) => {
  return (
    <Txt
      className={`${color}-text`}
      width={width}
      height={height}
      align={align}
      fontSize={fontSize}
      mobilefontsize={mobilefontsize}
      fontWeight={fontWeight}>
      {children}
    </Txt>
  );
};

const Txt = styled.div<{
  width: string;
  height: string;
  align: string;
  fontSize: number;
  mobilefontsize: number;
  fontWeight: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.height !== "auto" ? `line-height: ${props.height};` : "")}
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => (props.fontWeight === "bold" ? "700" : "400")};
  @media (max-width: 700px) {
    font-size: ${(props) => props.mobilefontsize}rem;
  }
`;

export default Text;
