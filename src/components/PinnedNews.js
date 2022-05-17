import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatMyDate } from "../utils/helpers";
import newsBG from "../assets/news_bg.jpg";
import { useFilterContext } from "../context/animal_filter_context";

const PinnedNews = () => {
  const { pinned_news } = useFilterContext();

  return (
    <Wrapper>
      <h2 className="title">hírek</h2>
      <div className="news-container">
        {pinned_news.map((post) => {
          const { id } = post;
          const { title, publishedAt: date } = post.attributes;
          const img =
            post.attributes.blog_img.data &&
            post.attributes.blog_img.data.attributes.url;

          return (
            <div key={id} className="container">
              <header>
                <img src={img || newsBG} alt="animal" />
              </header>
              <article>
                <Link to={`/hirek/${id}`}>
                  <h4>{title}</h4>
                </Link>
                <p>{`${formatMyDate(date)}`}</p>
              </article>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .news-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    overflow: hidden;
    margin: 3rem 0;
  }

  .title {
    margin: 3rem 0;
    text-decoration: underline orange;
    border-radius: 25px;
    padding: 0.25rem;
    text-align: center;
  }

  div {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    margin: 1rem;
    header {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    article {
      h4:hover {
        text-decoration: underline gray;
      }
      a {
        color: orangered;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .news-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
`;

export default PinnedNews;
