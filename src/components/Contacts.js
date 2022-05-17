import React from "react";
import AdoptationForm from "./AdoptationForm";
import AdoptationFormMask from "./AdoptationFormMask";
import styled from "styled-components";

const Contacts = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <div className="mask-container">
          <AdoptationFormMask />
        </div>
        <div className="form-container">
          <AdoptationForm />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;

  .main-container {
    display: grid;
  }

  .mask-container {
    z-index: 3;
    height: min-content;
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
