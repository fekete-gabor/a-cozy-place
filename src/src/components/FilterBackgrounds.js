import React, { useRef, useEffect } from "react";
import dog from "../assets/dog_bg.jpg";
import cat from "../assets/cat_bg.jpg";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { useFilterContext } from "../context/animal_filter_context";
import { gsap } from "gsap/dist/gsap";

const AnimalFilterBackgrounds = () => {
  const { updateFilters, clearAnimalFilters } = useFilterContext();

  // refs
  const wrapperRef = useRef(null);
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);

  let mediaQuery = useMediaQuery("(min-width: 800px)");

  // add animation
  useEffect(() => {
    const first = firstContainerRef.current;
    const second = secondContainerRef.current;
    const wrapper = wrapperRef.current;

    const handleChange = (target, width = "50", filter = "0") => {
      gsap.to(target, {
        duration: 1,
        minWidth: `${width}%`,
        filter: `grayscale(${filter}%)`,
      });
    };

    if (mediaQuery) {
      gsap.set(first, { minWidth: "50%" });
      gsap.set(second, { minWidth: "50%" });

      first.addEventListener("mouseenter", () => {
        handleChange(first, 60, 0);
        handleChange(second, 40, 100);
      });

      second.addEventListener("mouseenter", () => {
        handleChange(first, 40, 100);
        handleChange(second, 60, 0);
      });

      wrapper.addEventListener("mouseleave", () => {
        handleChange(first);
        handleChange(second);
      });
    } else {
      gsap.set(first, { minWidth: "100%" });
      gsap.set(second, { minWidth: "100%" });
    }
  }, [mediaQuery]);

  return (
    <Wrapper>
      <div className="wrap" ref={wrapperRef}>
        <div className="img-container" ref={firstContainerRef}>
          <Link to="#form">
            <img
              src={dog}
              alt="a puppy"
              name="type"
              data-value="kutyák"
              onClick={(e) => updateFilters(e)}
            />
          </Link>
          <div>
            <h2>kutyák</h2>
          </div>
        </div>
        <div className="img-container" ref={secondContainerRef}>
          <Link to="#form">
            <img
              src={cat}
              alt="a cat"
              name="type"
              data-value="macskák"
              onClick={(e) => updateFilters(e)}
            />
          </Link>
          <div>
            <h2>macskák</h2>
          </div>
        </div>
      </div>
      <div className="btn-container" onClick={() => clearAnimalFilters()}>
        <button onClick={() => clearAnimalFilters()}>
          nem tudok dönteni, mutasd mindet
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 85% 15%;
  height: 100vh;

  .wrap {
    display: grid;
    height: 100%;
    width: 100%;
    .img-container {
      position: relative;
      img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
      }
      &:hover div {
        transition: var(--transition);
        opacity: 0;
      }
      div {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
          cursor: pointer;
          color: whitesmoke;
          font-size: 3rem;
          letter-spacing: 7.5px;
        }
      }
    }
  }

  .btn-container {
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: min-content;
    background: orange;
    transition: var(--transition);
    button {
      cursor: pointer;
      padding: 1rem;
      border: none;
      color: #222;
      background-color: transparent;
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: var(--transition);
    }
    &:hover {
      background: orangered;
    }
    &:hover button {
      color: whitesmoke;
    }
  }

  @media screen and (min-width: 600px) {
    .wrap {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }
  }
`;

export default AnimalFilterBackgrounds;
