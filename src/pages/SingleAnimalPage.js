import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Error,
  SingleAnimalGallery,
  SingleAnimalInfo,
  Contacts,
  GoogleMaps,
  ContactsInfo,
} from "../components";
import { useMainContext } from "../context/main_context";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SingleAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_animal,
    single_animal_loading: isLoading,
    single_animal_error: isError,
    fetchSingleAnimal,
  } = useMainContext();

  useEffect(() => {
    fetchSingleAnimal(id);
  }, [id]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate("/gazdikereso");
      }, 5000);
    }
  }, [isError]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return (
      <Wrapper>
        <Error />;
      </Wrapper>
    );
  }

  const animal = single_animal.attributes;

  return (
    <Wrapper>
      <div className="main-container">
        <SingleAnimalInfo animal={animal} />
        <SingleAnimalGallery animal={animal} />
      </div>
      <Contacts />
      <ContactsInfo />
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
  overflow: hidden;

  .main-container {
    display: grid;
    grid-template-rows: 1fr auto;
    text-align: center;
    margin: 0 auto;
    width: max-content;
  }

  @media screen and (min-width: 1350px) {
    .main-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default SingleAnimal;
