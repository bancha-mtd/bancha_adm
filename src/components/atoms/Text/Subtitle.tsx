import React from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  isTop?: boolean;
};

const Subtitle = ({ children, isTop = false }: Props) => {
  return <Title borderradius={isTop ? "20px 20px 0 0" : "0"}>{children}</Title>;
};

const Title = styled.div<{ borderradius: string }>`
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: #b9b9b9;
  color: white;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.borderradius};
`;

export default Subtitle;
