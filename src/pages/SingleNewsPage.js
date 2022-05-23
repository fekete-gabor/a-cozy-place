import React, { useEffect } from "react";
import styled from "styled-components";
import { Error } from "../components";
import { useMainContext } from "../context/main_context";
import { useParams, useNavigate } from "react-router-dom";

const SingleAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_news,
    single_news_loading: isLoading,
    single_news_error: isError,
    fetchSingleNews,
  } = useMainContext();

  useEffect(() => {
    fetchSingleNews(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate("/hirek");
      }, 5000);
    }
    // eslint-disable-next-line
  }, [isError]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return (
      <Wrapper>
        <div style={{ height: "100vh" }}>
          <Error text={"Úgy tűnik nincs ilyen hír."} />;
        </div>
      </Wrapper>
    );
  }

  return <Wrapper>asd</Wrapper>;
};

const Wrapper = styled.section`
  /* height: fit-content;
  overflow: hidden;
  min-height: 100vh;

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
  } */
`;

export default SingleAnimal;
