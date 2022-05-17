import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <p>
        &copy; {date} <span>a cozy place</span>, all rights reserved{" "}
        <span className="heart">&hearts;</span> created by{" "}
        <span>Gábor Fekete</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-primary-5);
  text-transform: capitalize;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-size: 1.25rem;
    color: whitesmoke;
  }
  span {
    color: var(--clr-primary-1);
  }

  .heart {
    color: hotpink;
  }
`;

export default Footer;
