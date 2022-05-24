import React, { useEffect } from "react";
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
  Spinner,
} from "../components";
import { useMainContext } from "../context/main_context";

const Home = () => {
  const { is_loading } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (is_loading) {
    return <Spinner />;
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
