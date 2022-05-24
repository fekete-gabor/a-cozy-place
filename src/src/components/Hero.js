import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <Wrapper>
      <div className="banner-container">
        <div className="banner-text">
          <article>
            <h2>
              Nézz be hozzánk itt, gyere ki a menhelyre, simogass, sétáltass, és{" "}
              <span>vigyél haza</span>!
            </h2>
          </article>
        </div>
        <img src={hero} alt="dog paw banner" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 85vh;

  a:visited {
    color: unset;
  }

  .banner-container {
    height: 100%;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .banner-text {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    color: beige;
    padding: 2rem 3rem;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.325),
      rgba(0, 0, 0, 0.325)
    );
    h2 {
      text-transform: none;
    }
    span {
      animation: rainbow 6s linear infinite;
      text-decoration: underline;
    }

    @keyframes rainbow {
      0% {
        color: #6666ff;
      }
      10% {
        color: #0099ff;
      }
      50% {
        color: #00ff00;
      }
      75% {
        color: #ff3399;
      }
      100% {
        color: #6666ff;
      }
    }
  }
`;

export default Hero;
