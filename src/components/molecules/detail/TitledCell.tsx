import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import { styled } from "styled-components";

type Props = {
  title: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  borderradius?: string;
};

const TitledCell = React.memo(
  ({
    title,
    width = "33.33333%",
    height = "100px",
    children,
    borderradius = "0",
  }: Props) => {
    return (
      <Flex width={width} height={height}>
        <Title borderradius={borderradius} height={height}>
          {title}
        </Title>
        {children}
      </Flex>
    );
  }
);

const Title = styled.div<{ height: string; borderradius: string }>`
  width: 120px;
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  text-align: center;
  background-color: grey;
  font-size: 1rem;
  color: white;
  border-radius: ${(props) => props.borderradius};
`;

export default TitledCell;
