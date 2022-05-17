import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineCopy } from "react-icons/ai";
import { useMainContext } from "../context/main_context";

const Adoszam = ({ color }) => {
  const { setAlert } = useMainContext();

  const adószám = useRef(null);
  return (
    <Wrapper>
      <h2
        className="title"
        style={{
          textDecoration: `underline ${color ? color : null}`,
        }}
      >
        Adomány
      </h2>
      <div
        className="container"
        onClick={() =>
          setAlert(
            "vágólapra másolva",
            navigator.clipboard.writeText(adószám.current.textContent)
          )
        }
      >
        <h2>
          adószám <span>/</span>
        </h2>
        <h3 ref={adószám}>18693180-1-13</h3>
        <span>
          <AiOutlineCopy />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
