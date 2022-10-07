import React, { useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main_context";

const AdoptationForm = () => {
  const { animal_name: name } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <h2>írj nekünk</h2>
      <form action={process.env.REACT_APP_NEWSLETTER_ENDPOINT} method="POST">
        {window.location.href.indexOf("elerhetosegek") > -1 || (
          <div className="form-control">
            <label htmlFor="#subject">Tárgy</label>
            <input
              className="form-input"
              type="text"
              id="subject"
              name="subject"
              value={name}
              readOnly
            />
          </div>
        )}
        <div className="form-control">
          <label htmlFor="#name">Név*</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="#email">Email*</label>
          <input
            className="form-input"
            type="text"
            id="email"
            placeholder="a_cozy_place@outlook.com"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="#phone">Telefon*</label>
          <input
            className="form-input"
            type="text"
            id="phone"
            placeholder="pl.: +3630/1234567"
            name="phone"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="#textarea">Üzenet*</label>
          <textarea
            className="form-input"
            id="teaxtarea"
            cols="30"
            rows="10"
            name="message"
            required
          ></textarea>
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">
            küldés
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  padding: 3rem 0.5rem 0;
  border-bottom: solid 3px #fa4151;

  h2 {
    margin-bottom: 2rem;
  }

  form {
    .form-control {
      display: grid;
      gap: 0.5rem;
      margin-bottom: 1rem;
      label {
        font-size: 1.2rem;
      }
      .form-input {
        width: 250px;
        max-width: 400px;
        font-size: 1rem;
        padding: 0.5rem;
        text-transform: lowercase;
        letter-spacing: 1px;
        border-radius: 25px;
        border: solid 3px orange;
        transition: var(--transition);
        &:focus {
          border: solid 3px orangered;
          outline: none;
        }
      }
      textarea {
        resize: none;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
  }

  #subject {
    cursor: default;
    border: solid 3px grey;
  }

  @media screen and (min-width: 500px) {
    form {
      .form-control {
        .form-input {
          width: 100%;
          font-size: 1.1rem;
          padding: 0.5rem 2rem;
          letter-spacing: 3px;
        }
      }
    }
  }
`;

export default AdoptationForm;
