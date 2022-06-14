import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Error,
  SingleAnimalGallery,
  SingleAnimalInfo,
  Contacts,
  GoogleMaps,
  ContactsInfo,
  Spinner,
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
    single_animal_loading: is_loading,
    single_animal_error: is_error,
    fetchSingleAnimal,
  } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchSingleAnimal(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (is_error) {
      setTimeout(() => {
        navigate("/gazdikereso");
      }, 5000);
    }
    // eslint-disable-next-line
  }, [is_error]);

  if (is_loading) {
    return <Spinner />;
  }

  if (is_error) {
    return (
      <Wrapper>
        <div style={{ height: "100vh" }}>
          <Error text={"Úgy tűnik ilyen névvel nincs nálunk senki."} />;
        </div>
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
  min-height: 100vh;

  .main-container {
    display: grid;
    grid-template-rows: 1fr auto;
    text-align: center;
    margin: 0 auto;
    width: max-content;
  }

  @media screen and (min-width: 1400px) {
    .main-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default SingleAnimal;
