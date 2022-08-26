import React from "react";
import cat from "../assets/cat_cartoon_1.jpg";
import dog from "../assets/dog_cartoon_3.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { useFilterContext } from "../context/animal_filter_context";
import styled from "styled-components";

const Cards = () => {
  const { updateFilters } = useFilterContext();

  return (
    <CardWrapper>
      <div className="flex-container">
        <div className="main-container">
          <div className="card-container">
            <Link to="gazdikereso#form" name="type" data-value="kutyák">
              <div className="card" onClick={(e) => updateFilters(e)}>
                <img
                  src={dog}
                  alt="cartoon dog"
                  name="type"
                  data-value="kutyák"
                />
              </div>
            </Link>
            <div className="card-title">
              <h2>mutasd a kutyikat</h2>
            </div>
          </div>
          <div className="card-container">
            <Link to="gazdikereso#form" name="type" data-value="macskák">
              <div className="card" onClick={(e) => updateFilters(e)}>
                <img
                  src={cat}
                  alt="cartoon cat"
                  name="type"
                  data-value="macskák"
                />
              </div>
            </Link>
            <div className="card-title">
              <h2>mutasd a macskákat</h2>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0);
    background: burlywood;
  }

  .main-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    gap: 1rem;
    margin: 0 auto;
  }

  .card {
    position: relative;
    margin: 0 auto 1rem;
    max-width: 225px;
    max-height: 225px;
    img {
      border: solid 2px #222;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
      &:hover {
        border: solid 2px orange;
      }
    }
  }

  .card-title {
    padding: 0 1.5rem;
  }

  @media screen and (min-width: 470px) {
    .flex-container {
      transform: translateY(-6rem);
      background: transparent;
    }
  }
`;

export default Cards;
