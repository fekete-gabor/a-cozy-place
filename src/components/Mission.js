import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/tacsi_1.jpg";
import { mission } from "../utils/helpers";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Mission = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const img = imgRef.current;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: text, start: "top 100%", ease: "linear" },
    });

    tl.to([text, img], {
      duration: 1,
      translateX: "0%",
    });
  }, []);

  return (
    <Wrapper>
      <div className="main-container">
        <div className="text-container" ref={textRef}>
          <h1>találd meg az új legjobb barátodat!</h1>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur animi sequi recusandae voluptatem provident corrupti,
              neque a id quod pariatur. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              architecto sint illum cumque dolorem est?
            </p>
            <div className="mission-container">
              {mission.map((item) => {
                const { id, title, icon, text } = item;
                return (
                  <div className="" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
        <div className="img-container" ref={imgRef}>
          <img src={img} alt="german shepherd" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-container {
    height: fit-content;
    width: 100vw;
    text-align: center;
    display: grid;
    padding: 2rem 0;
    grid-auto-flow: row;
    flex-wrap: wrap;
    transform: translateY(0);
  }

  .text-container {
    transform: translateX(-200%);
    max-width: 800px;
    height: max-content;
    padding: 2rem;
    margin: 0 auto;
    article {
      margin: 3rem 0;
    }
    p {
      font-size: 1.5rem;
    }
  }

  .mission-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    div {
      margin-bottom: 2rem;
      background-color: none;
      transition: var(--transition);
      padding: 1rem;
      &:hover {
        background: var(--clr-primary-1);
        color: #222;
      }
      &:hover span {
        color: orange;
      }
    }

    span {
      transition: var(--transition);
      font-size: 2.5rem;
      color: orangered;
    }
    p {
      font-size: 1.25rem;
    }
  }

  .img-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
    transform: translateX(200%);
    img {
      object-fit: cover;
      border-radius: 25px;
      width: 100%;
    }
  }

  @media screen and (min-width: 470px) {
    .main-container {
      transform: translateY(-3rem);
    }
  }

  @media screen and (min-width: 1290px) {
    .main-container {
      grid-auto-flow: column;
    }

    .img-container {
      padding: 0 2rem 0 0;
      img {
        transform: translateY(5rem);
      }
    }
  }
`;

export default Mission;
