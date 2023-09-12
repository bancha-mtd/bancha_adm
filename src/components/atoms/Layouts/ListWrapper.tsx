import React from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ListWrapper = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.article`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export default React.memo(ListWrapper);
