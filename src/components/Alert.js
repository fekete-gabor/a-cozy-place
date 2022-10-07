import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main_context";

const Alert = () => {
  const { alert, alertText, stopAlert } = useMainContext();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      stopAlert();
    }, 2000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [alert]);

  return (
    <Wrapper onClick={() => setHide(true)}>
      <div
        className={`${hide ? "hide-alert alert-container" : "alert-container"}`}
      >
        <h3>{alertText}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition);

  .alert-container {
    min-width: 150px;
    width: fit-content;
    border-radius: 25px;
    padding: 2rem;
    background: var(--clr-primary-1);
    color: #222;
    border: solid 2px #222;
    clip-path: circle(100% at 50% 50%);
  }

  .hide-alert {
    clip-path: circle(0% at 100% 0%);
    transition: clip-path 1s;
  }
`;

export default Alert;
