import React from "react";
import styled from "styled-components";
import {
  Parallax,
  ContactsInfo,
  AdoptationForm,
  GoogleMaps,
} from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  return (
    <Wrapper>
      <Parallax />
      <div className="contacts-container">
        <ContactsInfo />
        <AdoptationForm />
      </div>
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;

  .contacts-container {
    display: grid;
    background-color: whitesmoke;
    padding: 1rem;
  }

  @media screen and (min-width: 1350px) {
    .contacts-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Contacts;
