import React from "react";
import styled from "styled-components";
import { IoMdPaw } from "react-icons/io";
import {
  SupportHero,
  Adoszam,
  Tamogatas,
  Internship,
  GoogleMaps,
} from "../components";

const Support = () => {
  return (
    <Wrapper>
      <SupportHero />
      <Adoszam underlineColor={"goldenrod"} />
      <IoMdPaw className="icon" />
      <Tamogatas />
      <IoMdPaw className="icon" />
      <Internship />
      <GoogleMaps />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon {
    display: block;
    margin: 3rem auto;
    font-size: 3rem;
    color: brown;
  }
`;

export default Support;
