import React, { ReactNode } from "react";
import { styled } from "styled-components";

type Props = {
  children: ReactNode;
  width?: string;
  height?: string;
  gap?: string;
  direction?: "row" | "column";
  align?: "start" | "space-between" | "space-around" | "center" | "end";
  crossalign?: "start" | "center" | "baseline" | "end";
  padding?: string;
};

const Flex = ({
  children,
  width = "auto",
  height = "auto",
  gap = "20px",
  direction = "row",
  align = "start",
  crossalign = "center",
  padding = "0",
}: Props) => {
  return (
    <Wrapper
      width={width}
      height={height}
      padding={padding}
      direction={direction}
      align={align}
      crossalign={crossalign}
      gap={gap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  width: string;
  height: string;
  direction: string;
  align: string;
  crossalign: string;
  gap: string;
  padding: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.align};
  align-items: ${(props) => props.crossalign};
`;

export default React.memo(Flex);
