import React, { useEffect } from "react";
import { IoMdPaw } from "react-icons/io";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";

const Spinner = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.fromTo(
      ".wrapper",
      { clipPath: "circle(0% at 50% 50%)" },
      { duration: 3, clipPath: "circle(100% at 50% 50%)" }
    )
      .fromTo(
        ".mask",
        { clipPath: "circle(0% at 50% 50%)" },
        { duration: 4, clipPath: "circle(100% at 50% 50%)" },
        0
      )
      .fromTo(".icon", { autoAlpha: 0 }, { duration: 2, autoAlpha: 1 }, 0);
  }, []);

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="mask">
          <IoMdPaw className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: bisque;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;

  .wrapper {
    width: 100%;
    height: 100%;
    background-color: beige;
  }

  .mask {
    width: 100%;
    height: 100%;
    background-color: wheat;
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      font-size: 10rem;
      color: brown;
    }
  }
`;

export default Spinner;
