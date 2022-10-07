import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const ScrollTop = () => {
  return (
    <Wrapper href="#">
      <AiOutlineArrowUp />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: orange;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 999;
  transition: var(--transition);
  animation: bounce 3s ease-in-out infinite;

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    background-color: orangered;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.75rem;
    color: whitesmoke;
  }
`;

export default ScrollTop;
