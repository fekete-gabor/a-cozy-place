import React, { useRef } from "react";
import styled from "styled-components";
import { contacts } from "../utils/helpers";
import { AiOutlineCopy } from "react-icons/ai";
import { useMainContext } from "../context/main_context";

const Adoszam = ({ underlineColor }) => {
  const { setAlert } = useMainContext();
  const adószám = contacts.find((item) => item.title === "adószám");

  const adószámRef = useRef(null);

  return (
    <Wrapper id="adoszam">
      <h2
        className="title"
        style={{
          textDecoration: `underline ${underlineColor ? underlineColor : null}`,
        }}
      >
        Adomány
      </h2>
      <div
        className="container"
        onClick={() =>
          setAlert(
            "vágólapra másolva",
            navigator.clipboard.writeText(adószámRef.current.textContent)
          )
        }
      >
        <h2>
          {adószám.title} <span>/</span>
        </h2>
        <h3 ref={adószámRef}>{adószám.text}</h3>
        <span>
          <AiOutlineCopy />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  background-color: white;

  .title {
    border-radius: 25px;
    padding: 0.25rem;
    text-align: center;
  }

  .container {
    min-width: 200px;
    max-width: 300px;
    border-radius: 25px;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    p {
      color: #222;
      font-size: 1rem;
    }
    span {
      color: orangered;
      font-size: 2rem;
      border-radius: 25px;
      transition: var(--transition);
    }
    &:hover span {
      color: orange;
    }
  }
`;

export default Adoszam;
