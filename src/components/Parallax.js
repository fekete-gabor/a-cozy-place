import React, { useEffect } from "react";
import styled from "styled-components";
import contactsBG from "../assets/contacts_bg.jpg";
import layer1 from "../assets/l1.png";
import layer2 from "../assets/l2.png";
import layer3 from "../assets/l3.png";
import layer4 from "../assets/l4.png";
import layer5 from "../assets/l5.png";
import useMediaQuery from "../utils/mediaQuery";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const mediaQuery = useMediaQuery("(min-width: 1080px)");

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1080px)": function () {
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
  }, [mediaQuery]);

  if (mediaQuery) {
    return (
      <Wrapper>
        <div className="img-container">
          <img src={layer1} className="parallax" data-depth="0.1" alt="layer" />
          <img src={layer2} className="parallax" data-depth="0.2" alt="layer" />
          <img src={layer3} className="parallax" data-depth="0.4" alt="layer" />
          <img src={layer4} className="parallax" data-depth="0.5" alt="layer" />
          <img src={layer5} className="parallax" data-depth="0.6" alt="layer" />
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="img-container">
          <img src={contactsBG} alt="main" />
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .img-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1080px) {
    .img-container {
      img {
        position: fixed;
        z-index: -1;
      }
    }
  }
`;

export default Parallax;
