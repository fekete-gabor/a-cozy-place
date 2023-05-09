import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dog from "../assets/dog_cartoon_4.jpg";

const ErrorPage = () => {
  return (
    <Wrapper className="section">
      <div className="img-container">
        <img src={dog} alt="cartoon dog" />
      </div>
      <div className="btn-container">
        <h3>Úgy tűnik ezen az oldalon nincs semmi.</h3>
        <Link to="/" className="btn">
          Vissza a kezdőlapra
        </Link>
        <Link to="gazdikereso" className="btn">
          Mutasd az állatokat!
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  width: auto;
  display: grid;
  place-items: center;
  background-color: white;

  .img-container {
    max-width: 600px;
    img {
      width: 100%;
    }
  }

  .btn-container {
    padding: 1rem;
    text-align: center;
    a {
      margin: 0.5rem;
      font-size: 1.25rem;
    }
  }
`;

export default ErrorPage;
