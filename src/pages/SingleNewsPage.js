import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdPaw } from "react-icons/io";
import { formatMyDate } from "../utils/helpers";
import logo from "../assets/textless_logo.png";
import { Error, Adoszam, PinnedNews, Spinner } from "../components";
import { useMainContext } from "../context/main_context";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const SingleAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_news: post,
    single_news_loading: is_loading,
    single_news_error: is_error,
    fetchSingleNews,
  } = useMainContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchSingleNews(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (is_error) {
      setTimeout(() => {
        navigate("/hirek");
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
          <Error text={"Úgy tűnik nincs ilyen hír."} />;
        </div>
      </Wrapper>
    );
  }

  const { author, title, desc, publishedAt: date } = post.attributes;

  return (
    <Wrapper>
      <div className="main">
        <article>
          <header>
            <h1>{title}</h1>
            <div className="author-container">
              <div className="image-container">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h4>szerző: {author}</h4>
                <p>posztolva: {formatMyDate(date)}</p>
              </div>
            </div>
          </header>
          <div className="desc-container">
            <ReactMarkdown children={desc} />
          </div>
          <IoMdPaw className="icon" />
        </article>
        <div>
          <PinnedNews />
          <div className="sticky">
            <Adoszam underlineColor={"orange"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: min-content;

  .main {
    display: grid;
    padding: 2rem 0.5rem;
  }

  .author-container {
    display: grid;
    align-items: center;
    gap: 0.75rem;
    border-bottom: solid 2px rebeccapurple;
    margin: 2rem 0 3rem;
    padding-bottom: 1rem;
    h4 {
      margin-top: 0.5rem;
    }
  }

  .image-container {
    text-align: center;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-top: 0.5rem;
    }
  }

  .desc-container {
    p {
      font-weight: 600;
      font-size: 1.1rem;
    }
  }

  .sticky {
    position: sticky;
    top: 150px;
  }

  .icon {
    display: block;
    margin: 3rem auto;
    font-size: 3rem;
    color: brown;
  }

  @media screen and (min-width: 350px) {
    .main {
      display: grid;
      padding: 2rem 1rem;
    }

    .author-container {
      display: flex;
    }

    .image-container {
      text-align: left;
    }

    .desc-container {
      p {
        font-weight: 600;
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .main {
      padding: 2rem 4rem;
    }
  }

  @media screen and (min-width: 1300px) {
    .main {
      grid-template-columns: 80% 20%;
      gap: 2rem;
    }
  }
`;

export default SingleAnimal;
