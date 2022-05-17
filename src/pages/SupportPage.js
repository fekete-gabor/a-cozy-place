import React from "react";
import styled from "styled-components";
import { Adoszam, Tamogatas, Internship } from "../components";

const Support = () => {
  return (
    <Wrapper>
      <h2>support</h2>
      <Adoszam />
      <Tamogatas />
      <Internship />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Support;
