import React from "react";
import styles from "./Spinner.module.css";
import { styled } from "styled-components";

type Props = {
  width?: string;
  height?: string;
};

const Spinner = ({ width = "100%", height = "100%" }: Props) => {
  return (
    <Wrapper width={width} height={height}>
      <div className={styles.spinner}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
`;

export default React.memo(Spinner);
