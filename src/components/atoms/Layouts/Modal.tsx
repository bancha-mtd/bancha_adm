import React, { useEffect, useRef } from "react";
import Flex from "./Flex";
import Button from "../Button/Button";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
  type: 1 | 2 | 3 | 4; // X버튼, 확인버튼, 버튼없음,  Spinner
  closeModal?: () => void;
};

const Modal = ({ children, closeModal = () => {}, type = 1 }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Wrapper>
      <Mod ref={modalRef} colored={type}>
        {type === 1 && (
          <Flex align="end">
            <button onClick={closeModal}>✖</button>
          </Flex>
        )}
        {children}
        {type === 2 && (
          <Button onClick={closeModal} color="orange">
            확인
          </Button>
        )}
      </Mod>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000050;
  z-index: 500;
`;

const Mod = styled.div<{ colored: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.colored !== 4 ? "white" : "transparent"};
  box-shadow: ${(props) =>
    props.colored !== 4 ? "0px 0px 10px 10px grey" : "none"};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 500;
  animation: openModal 0.5s ease;
`;

export default React.memo(Modal);
