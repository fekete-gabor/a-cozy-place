import React, { useEffect } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useMainContext } from "../context/main_context";
import { gsap } from "gsap/dist/gsap";

const SupportHero = () => {
  const { animals, all_urls: images } = useMainContext();

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
          {images.map((img, index) => {
            return <img src={img} alt="main" key={index} className="img" />;
          })}
        </div>
        <div className="btn-container">
          <Link to="#targyi-tamogatas" className="button">
            tárgyi támogatás
          </Link>
          <Link to="#onkentes-munka" className="button">
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
    height: calc(4 * 151px + 1rem);
    background: bisque;
    position: relative;
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.125),
      rgba(0, 0, 0, 0.125)
    );
    z-index: 2;
  }

  .bg-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
    height: 100%;
    gap: 0.25rem;
    padding: 0.25rem;
    margin: 0 auto;
    z-index: -1;
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 25px;
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    z-index: 3;
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

  @media screen and (min-width: 700px) {
    .main-container {
      height: calc(3 * 200px + 1rem);
    }

    .bg-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 25px;
      }
    }
  }

  @media screen and (min-width: 1225px) {
    .bg-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1500px;
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 25px;
      }
    }
  }
`;

export default SupportHero;
