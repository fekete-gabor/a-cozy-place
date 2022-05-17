import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/animal_filter_context";
import dog from "../assets/dog_cartoon_1.jpg";

const Error = ({ btnType }) => {
  const { clearAnimalFilters } = useFilterContext();

  return (
    <Wrapper>
      <div className="image-container">
        <img src={dog} alt="cartoon dog" />
      </div>
      <div className="button-container">
        <h3>Úgy tűnik ilyen névvel nincs nálunk senki.</h3>
        <button
          className="btn"
          style={{ display: `${btnType ? btnType : "none"}` }}
          type="button"
          onClick={() => clearAnimalFilters()}
        >
          vissza
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .image-container {
    max-width: 450px;
    img {
      width: 100%;
    }
  }

  .button-container {
    padding: 1rem;
    text-align: center;
    display: grid;
    button {
      width: max-content;
      margin: 0 auto;
    }
  }
`;

export default Error;
