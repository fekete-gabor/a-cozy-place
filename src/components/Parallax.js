import React, { useEffect } from "react";
import styled from "styled-components";
import layer1 from "../assets/l1.png";
import layer2 from "../assets/l2.png";
import layer3 from "../assets/l3.png";
import layer4 from "../assets/l4.png";
import layer5 from "../assets/l5.png";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1300px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".parallax",
            start: "top 0%",
            scrub: true,
          },
        });
        gsap.utils.toArray(".parallax").forEach((layer) => {
          const depth = layer.dataset.depth;
          const movement = -(layer.offsetHeight * depth);
          tl.to(layer, { y: movement, ease: "none" }, 0);
        });
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="img-container">
        <img src={layer1} className="parallax" data-depth="0.1" alt="img" />
        <img src={layer2} className="parallax" data-depth="0.2" alt="img" />
        <img src={layer3} className="parallax" data-depth="0.4" alt="img" />
        <img src={layer4} className="parallax" data-depth="0.5" alt="img" />
        <img src={layer5} className="parallax" data-depth="0.6" alt="img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .img-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    img {
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Parallax;
