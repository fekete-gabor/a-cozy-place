import React, { useEffect } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useMainContext } from "../context/main_context";
import { gsap } from "gsap/dist/gsap";

const SupportHero = () => {
  const { animals } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".img").forEach((img, index) => {
      gsap.fromTo(
        img,
        { filter: "grayscale(100%)" },
        {
          duration: 1,
          ease: "linear",
          filter: "grayscale(0%)",
        },
        `${index} * 5`
      );
    });
  }, [animals]);

  return (
    <Wrapper>
      <div className="main-container">
        <div className="layer"></div>
        <div className="bg-container">
          {animals.map((animal) => {
            return animal.attributes.img.data.map((item, index) => {
              const img = item.attributes.url;
              return <img src={img} alt="main" key={index} className="img" />;
            });
          })}
        </div>
        <div className="btn-container">
          <Link to="#adoszam" className="button">
            adószám
          </Link>
          <Link smooth to="#targyi-tamogatas" className="button">
            tárgyi támogatás
          </Link>
          <Link smooth to="#onkentes-munka" className="button">
            önkéntes munka
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 5rem;

  .main-container {
    width: 100%;
    height: calc(3 * 225px + 1rem);
    background: bisque;
    position: relative;
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.225),
      rgba(0, 0, 0, 0.225)
    );
  }

  .bg-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 0.25rem;
    padding: 0.25rem;
    z-index: -1;
    img {
      width: 225px;
      height: 225px;
      object-fit: cover;
      border-radius: 25px;
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: max-content;
    background-color: whitesmoke;
    gap: 0.5rem;
  }

  .button {
    cursor: pointer;
    transform: translateY(-1.25rem);
    padding: 0.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    background-color: orangered;
    color: whitesmoke;
    border: none;
    border-radius: 15px;
    transition: var(--transition);
    &:hover {
      background-color: orange;
      color: #222;
    }
  }

  @media screen and (min-width: 400px) {
    .btn-container {
      gap: 1rem;
    }
    .button {
      cursor: pointer;
      transform: translateY(-2rem);
      padding: 1rem;
      font-size: 1.25rem;
    }
  }
`;

export default SupportHero;
