import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <div>
        <header>
          <h2>Iratkozz fel hírlevelünkre.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iure laboriosam magni enim, dolore sequi quia perspiciatis
            temporibus voluptatem ullam!
          </p>
        </header>
        <form
          className="newsletter-form"
          action={process.env.REACT_APP_NEWSLETTER_ENDPOINT}
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="email címed..."
            required
          />
          <button type="submit">feliratkozás</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: bisque;

  div {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 1.5rem;
    gap: 0.5rem 3rem;
    header {
      max-width: 700px;
      p {
        font-size: 1.25rem;
      }
    }
  }

  .newsletter-form {
    display: flex;
    flex-wrap: wrap;
    input {
      border: none;
      padding: 0.75rem 0.25rem;
      outline: none;
      letter-spacing: 2px;
    }
    button {
      cursor: pointer;
      padding: 0.75rem 0.25rem;
      background: burlywood;
      color: whitesmoke;
      border: none;
      transition: var(--transition);
      &:hover {
        background: orange;
      }
    }
  }

  @media screen and (min-width: 400px) {
    .newsletter-form {
      input {
        font-size: 1.35rem;
        padding: 0.75rem 1rem;
      }
      button {
        font-size: 1.35rem;
        padding: 0.75rem 1rem;
      }
    }
  }

  @media screen and (min-width: 1191px) {
    padding: 7.5rem;
    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      place-items: center;
    }
  }
`;

export default Newsletter;
