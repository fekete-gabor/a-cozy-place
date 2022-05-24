import React, { useRef, useEffect } from "react";
import dogBG from "../assets/dog_large_bg.jpg";
import { Adoszam } from "./index";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SupportComponent = () => {
  const myRef = useRef();
  const imgRef = useRef();
  const articleRef = useRef();

  useEffect(() => {
    const wrapperRef = myRef.current;
    const img = imgRef.current;
    const article = articleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef,
        scrub: true,
        start: "top 50%",
        end: "bottom 10%",
      },
    });

    tl.to(".dot", { scale: 1.5 }, "-=1");

    gsap.set(img, { translateX: "0rem" });
    gsap.set(article, { translateX: "0rem" });

    ScrollTrigger.matchMedia({
      "(min-width: 1300px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef,
            scrub: true,
            start: "top 50%",
            end: "bottom 10%",
          },
        });
        tl.to(img, { translateX: "+5rem" }, "-=1");
        tl.to(article, { translateX: "-5rem" }, "-=1");
      },
    });
  }, []);

  return (
    <Wrapper ref={myRef}>
      <div className="main-container">
        <div className="dot"></div>
        <header ref={imgRef}>
          <img src={dogBG} alt="dog and his owner" />
        </header>
        <article ref={articleRef}>
          <Adoszam />
          <div>
            <h2>tárgyi támogatás</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, voluptatibus...
            </p>
            <Link to="tamogatas#targyi-tamogatas">további részletek</Link>
          </div>
          <div>
            <h2>önkéntes munka</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              provident. Optio iure unde culpa sint...
            </p>
            <Link to="tamogatas#onkentes-munka">további részletek</Link>
          </div>
          <div>
            <h2>adhat vonal</h2>
            <p>
              Tárcsázd a <strong>13600</strong>-at , üsd be a{" "}
              <strong>76</strong>-os kódot és támogass minket, hogy állataink
              megfelelő orvosi ellátásban, ivartalanításban részesülhessenek,
              minél többüket menthessük az utcáról, és találjanak szerető
              otthonra. Hívd fel vagy küldj SMS-t a következő számra
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;

  .main-container {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
    gap: 1rem;
  }

  .dot {
    position: absolute;
    background: rgb(234, 242, 155);
    background: radial-gradient(
      circle,
      rgba(234, 242, 155, 1) 0%,
      rgba(201, 154, 58, 1) 50%,
      rgba(234, 242, 155, 1) 100%
    );
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    height: 142vmax;
    width: 142vmax;
    border-radius: 50%;
  }

  header {
    align-self: flex-end;
    background-color: brown;
    border-radius: 25px;
    z-index: 1;
    height: max-content;
    margin: 1rem 1rem 0 1rem;
    img {
      width: 100.1%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
    }
  }

  article {
    height: fit-content;
    background-color: var(--clr-primary-5);
    border-radius: 25px;
    text-align: center;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 1rem 1rem 1rem;
    div {
      display: grid;
      grid-template-rows: auto 1fr auto;
      margin: 0.5rem;
      padding: 1rem 0;
      border-radius: 25px;
      background: whitesmoke;
      p {
        font-size: 1.25rem;
      }
      a {
        color: orangered;
        font-size: 1.25rem;
        font-weight: 700;
        border-radius: 25px;
        width: fit-content;
        padding: 0.5rem 1rem;
        margin: 0 auto;
        transition: var(--transition);
        &:hover {
          color: orange;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .main-container {
      padding: 2.5rem;
      article {
        div {
          padding: 1rem 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    header {
      img {
        height: 100%;
        max-height: 500px;
      }
    }
    article {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1300px) {
    .main-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
      header {
        transform: translateX(-3rem);
        max-height: none;
      }
      article {
        transform: translateX(3rem);
      }
    }
  }
`;
export default SupportComponent;
