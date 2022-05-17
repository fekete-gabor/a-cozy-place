import React from "react";
import {
  FilterBackgrounds,
  FilterForm,
  FilterList,
  Adoszam,
  PinnedNews,
  SmallFilterBackgrounds,
} from "../components";
import { useMainContext } from "../context/main_context";
import styled from "styled-components";

const Animals = () => {
  const { isLoading } = useMainContext();

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <Wrapper>
      <FilterBackgrounds />
      <FilterForm />
      <div className="main-container">
        <div className="list-container">
          <FilterList />
        </div>
        <div className="form-container">
          <PinnedNews />
          <div className="sticky">
            <Adoszam color={"orange"} />
            <SmallFilterBackgrounds />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: min-content;

  .main-container {
    display: grid;
  }

  .sticky {
    position: sticky;
    top: 150px;
  }

  @media screen and (min-width: 1600px) {
    .main-container {
      grid-template-columns: 80% 20%;
    }
  }
`;

export default Animals;
