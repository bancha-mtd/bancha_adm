import React from "react";
import Flex from "../../atoms/Layouts/Flex";
import { styled } from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const TitledRow = (props: Props) => {
  return (
    <Flex>
      <Title>{props.title}</Title>
      {props.children}
    </Flex>
  );
};

const Title = styled.div`
  width: 150px;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 1rem;
`;

export default TitledRow;
