import React from "react";
import {
  FilterBackgrounds,
  FilterForm,
  FilterList,
  Adoszam,
  PinnedNews,
  SmallFilterBackgrounds,
  Spinner,
} from "../components";
import { useMainContext } from "../context/main_context";
import styled from "styled-components";

const Animals = () => {
  const { is_loading } = useMainContext();

  if (is_loading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <FilterBackgrounds />
      <FilterForm />
      <div className="main-container">
        <div>
          <FilterList />
        </div>
        <div>
          <PinnedNews />
          <div className="sticky">
            <Adoszam underlineColor={"orange"} />
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
  background-color: whitesmoke;

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
