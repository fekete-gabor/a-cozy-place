import React from "react";
import Error from "./Error";
import { Link } from "react-router-dom";
import { replaceLetters } from "../utils/helpers";
import { useFilterContext } from "../context/animal_filter_context";
import styled from "styled-components";

const AnimalFilterList = () => {
  const { current_index, indexes, paginated, changePageIndex } =
    useFilterContext();

  return (
    <Wrapper>
      <section className="container" id="form">
        {paginated ? (
          paginated.map((animal, index) => {
            const { id } = animal;
            const {
              name,
              size,
              type,
              breed,
              gender,
              color,
              date_of_birth: dob,
              date_of_registry: dor,
              desc,
            } = animal.attributes;
            const img = animal.attributes.img.data[0].attributes.url;

            return (
              <section key={index} className="section-center">
                <header>
                  <img src={img} alt="an animal" />
                </header>
                <article>
                  <div
                    className="title-container"
                    style={{ borderBottom: `solid 2px ${color}` }}
                  >
                    <div className="box" style={{ background: color }}></div>
                    <h2>{name}</h2>
                  </div>
                  <div className="tag-container">
                    {breed && <p>fajta: {breed},</p>}
                    {gender && <p>nem: {gender},</p>}
                    {size && <p>méret: {size},</p>}
                    {dob && <p>születési idő: {dob},</p>}
                    {dor && <p>hozzánk érkezett: {dor},</p>}
                  </div>
                  <div>
                    <p>{desc && `${desc.substring(0, 70)}...`}</p>
                  </div>
                  <div className="link-container">
                    <Link to={`${replaceLetters(type)}/${id}`}>
                      Részletek, {type === "kutyák" ? "Woof!" : "Meow!"}
                    </Link>
                  </div>
                </article>
              </section>
            );
          })
        ) : (
          <Error btnType={"flex"} />
        )}
        {paginated && (
          <div className="btn-container">
            {indexes.map((_, index) => {
              return (
                <button
                  key={index}
                  className={current_index === index ? "active btn" : "btn"}
                  onClick={() => changePageIndex(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  .container {
    display: grid;
    margin: 0 auto;
    gap: 3rem;
  }

  .section-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0.5rem;
    gap: 2rem 3rem;
    margin-bottom: 1rem;
    header {
      max-height: 400px;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
      }
    }
    article {
      gap: 1rem;
      div {
        p,
        a {
          padding: 0 1rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }

    .tag-container {
      margin: 1.5rem 0;
      p {
        text-transform: uppercase;
        color: orangered;
        letter-spacing: 1px;
      }
    }

    .link-container {
      margin-top: 3rem;
      a {
        margin-top: 1.5rem;
        color: whitesmoke;
        padding: 1rem;
        margin: 1rem;
        border-radius: 25px;
        background: orange;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        &:hover {
          background-color: orangered;
        }
      }
    }

    .title-container {
      display: flex;
      align-items: center;
      .box {
        width: 50px;
        height: 56px;
        margin-right: 1rem;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 5rem;
  }

  .active {
    color: whitesmoke;
    background-color: orangered;
  }

  @media screen and (min-width: 300px) {
    .section-center {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      padding: 1rem;
      article {
        p,
        a {
          font-size: 1.15rem;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (min-width: 350px) {
    .section-center {
      article {
        div {
          p,
          a {
            font-size: 1.25rem;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default AnimalFilterList;
