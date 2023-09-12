import React from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  height?: string;
  minHeight?: string;
};

const Panel = React.memo(
  ({ children, height = "auto", minHeight = "auto" }: Props) => {
    return (
      <Wrapper className="panel" height={height} minheight={minHeight}>
        {children}
      </Wrapper>
    );
  }
);

const Wrapper = styled.section<{ height: string; minheight: string }>`
  width: calc(90dvw - 40px);
  height: ${(props) => props.height};
  min-height: ${(props) => props.minheight};
  background-color: white;
  border-radius: 20px;
`;

export default Panel;
