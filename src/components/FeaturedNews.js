import React from "react";
import newsBG from "../assets/news_bg.jpg";
import { BsFillPinAngleFill } from "react-icons/bs";
import { formatMyDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main_context";
import styled from "styled-components";

const PinnedNews = () => {
  const { featured_news } = useMainContext();

  return (
    <Wrapper>
      <div className="title-container">
        <h2>Hírek</h2>
      </div>
      <div className="main-container">
        {featured_news.map((post) => {
          const { id } = post;
          const { author, title, publishedAt: date } = post.attributes;
          const desc = post.attributes.desc[0].children[0].text;
          const img =
            post.attributes.img.data && post.attributes.img.data.attributes.url;

          return (
            <article key={id}>
              <header className="img-container">
                <img src={img || newsBG} alt="an animal" />
              </header>
              <div className="date-container">
                <p>{`${formatMyDate(date)}`}</p>
                <BsFillPinAngleFill />
              </div>
              <div>
                <h2>{title}</h2>
                <p>
                  szerző : <span>{author}</span>
                </p>
              </div>
              <div>
                <p>{`${desc.substring(0, 150)}`}...</p>
              </div>
              <div>
                <Link to={`hirek/${id}`}>bővebben itt</Link>
              </div>
            </article>
          );
        })}
      </div>
      <div className="btn-container">
        <Link to={"hirek"} className="btn" type="button">
          mutasd az összes hírt
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  text-align: center;
  padding: 2rem 0;
  background-color: whitesmoke;

  .main-container {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 4rem 1rem;
    margin: 5rem auto;
    article {
      display: grid;
      grid-template-rows: auto 1fr;
      position: relative;
      background-color: whitesmoke;
      border-bottom: solid 2px purple;
      div {
        padding: 1.5rem 2rem 0.5rem;
      }
      .date-container {
        cursor: default;
        display: flex;
        width: max-content;
        position: absolute;
        top: 0;
        left: 30%;
        transform: translate(-50%, -50%);
        gap: 0.5rem;
        padding: 1rem;
        background-color: orange;
        border-radius: 25px;
        p {
          color: whitesmoke;
        }
        svg {
          color: whitesmoke;
          font-size: 1.75rem;
        }
      }
      h2 {
        color: purple;
      }
      p {
        color: #222;
        font-weight: 60;
        font-size: 1.3rem;
        span {
          color: purple;
        }
      }
      a {
        transition: var(--transition);
        color: hotpink;
        font-size: 1.45rem;
        font-weight: 600;
        &:hover {
          color: rebeccapurple;
        }
      }
    }
  }

  .img-container {
    min-height: 300px;
    height: 400px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
      transform: scale(1);
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .btn-container {
    width: 100%;
    margin: 3rem auto;
  }

  @media screen and (min-width: 500px) {
    .main-container {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      padding: 2rem;
      article {
        div {
          padding: 1.5rem 2rem 1rem;
        }
        .date-container {
          position: absolute;
          top: 0;
          left: 80%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  @media screen and (min-width: 1195px) {
    .main-container {
      gap: 3rem 1rem;
      width: 75vw;
    }
  }
`;
export default PinnedNews;
