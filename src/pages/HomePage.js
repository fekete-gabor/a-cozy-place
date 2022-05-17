import React from "react";
import styled from "styled-components";
import {
  Hero,
  HeroFilters,
  Mission,
  FeaturedAnimals,
  Support,
  FeaturedNews,
  Newsletter,
  GoogleMaps,
} from "../components";
import { useMainContext } from "../context/main_context";

const Home = () => {
  const { isLoading } = useMainContext();

  if (isLoading) {
    return (
      <Wrapper>
        <h2>loading...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Hero />
      <HeroFilters />
      <Mission />
      <Support />
      <FeaturedAnimals />
      <FeaturedNews />
      <Newsletter />
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
`;

export default Home;
