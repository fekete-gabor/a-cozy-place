import React from "react";
import dog from "../assets/dog_bg.jpg";
import cat from "../assets/cat_bg.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { useFilterContext } from "../context/animal_filter_context";
import styled from "styled-components";

const SmallFilterBackgrounds = () => {
  const { updateFilters } = useFilterContext();

  return (
    <Wrapper>
      <h2 className="title">állataink</h2>
      <section>
        <div className="img-container">
          <Link to="#form">
            <img
              src={dog}
              alt="a dog"
              name="type"
              data-value="kutyák"
              onClick={(e) => updateFilters(e)}
            />
          </Link>
        </div>
        <div className="img-container">
          <Link to="#form">
            <img
              src={cat}
              alt="a cat"
              name="type"
              data-value="macskák"
              onClick={(e) => updateFilters(e)}
            />
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3rem 0;

  .title {
    margin: 3rem 0;
    text-decoration: underline orange;
    border-radius: 25px;
    padding: 0.25rem;
    text-align: center;
  }

  section {
    display: grid;
    justify-content: center;
    gap: 1.5rem;
    .img-container {
      width: 125px;
      height: 125px;
      border-radius: 51%;
      background: #222;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        opacity: 1;
        transition: var(--transition);
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  @media screen and (min-width: 300px) {
    section {
      display: flex;
    }
  }
`;

export default SmallFilterBackgrounds;
