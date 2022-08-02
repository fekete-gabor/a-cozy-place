import React, { useEffect } from "react";
import AdoptationForm from "./AdoptationForm";
import AdoptationFormMask from "./AdoptationFormMask";
import styled from "styled-components";
import { useMainContext } from "../context/main_context";

const Contacts = () => {
  const { animal_reserved } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      {!animal_reserved && (
        <div className="main-container">
          <div className="mask-container">
            <AdoptationFormMask />
          </div>
          <div className="form-container">
            <AdoptationForm />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;

  .main-container {
    display: grid;
    min-height: 100vh;
  }

  .mask-container {
    z-index: 3;
  }

  .form-container {
    z-index: 1;
  }

  @media screen and (min-width: 992px) {
    .main-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Contacts;
