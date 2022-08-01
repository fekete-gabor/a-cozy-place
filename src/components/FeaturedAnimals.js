import React, { useEffect } from "react";
import { replaceLetters } from "../utils/helpers";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main_context";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturedAnimals = () => {
  const { featured_animals, fetchSingleAnimal } = useMainContext();

  useEffect(() => {
    gsap.utils.toArray(".featured").forEach((animal, i) => {
      gsap.fromTo(
        animal,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          delay: `${i / 4}`,
          scrollTrigger: {
            id: `section-${i + 1}`,
            trigger: animal,
            start: "top 100%",
          },
        }
      );
    });
  }, [featured_animals]);

  return (
    <Wrapper>
      <div className="title-container">
        <h2>ők is gazdira várnak!</h2>
      </div>
      <div className="main-container">
        {featured_animals.map((animal, index) => {
          const { id } = animal;
          const {
            breed,
            date_of_birth: dob,
            date_of_registry: dor,
            desc,
            gender,
            name,
            size,
            type,
            color,
          } = animal.attributes;
          const img = animal.attributes.img.data[0].attributes.url;

          return (
            <section key={id} className="featured">
              <header>
                <img src={img} alt="img of an animal" />
                <Link
                  to={`/gazdikereso/${replaceLetters(type)}/${id}`}
                  onClick={() => fetchSingleAnimal(id)}
                >
                  <BsSearch />
                </Link>
              </header>
              <article>
                <div>
                  <h2>név : {name}</h2>
                  <p>{desc && `${desc.substring(0, 100)}...`}</p>
                </div>
                <div className="tag-container">
                  {breed && <p>fajta : {breed},</p>}
                  {gender && <p>nem : {gender},</p>}
                  {size && <p>méret : {size},</p>}
                  {dob && <p>születési idő : {dob},</p>}
                  {dor && <p>hozzánk érkezett : {dor},</p>}
                </div>
                <div
                  className="link-container"
                  onClick={() => fetchSingleAnimal(id)}
                  style={{ background: color }}
                >
                  <Link to={`/gazdikereso/${replaceLetters(type)}/${id}`}>
                    Részletek
                  </Link>
                </div>
              </article>
            </section>
          );
        })}
      </div>
      <div className="btn-container">
        <Link to={"/gazdikereso"} className="btn" type="button">
          nem tudok dönteni, mutasd mindet
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;

  .title-container {
    padding: 2rem 0;
    text-align: center;
  }

  .main-container,
  .title-container {
    background-color: bisque;
    width: 95%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
  }

  section {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: whitesmoke;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    box-shadow: 7.5px -7.5px 5px #555;
    header {
      height: 300px;
      background-color: #222;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        object-fit: cover;
        transition: var(--transition);
      }
      svg {
        position: absolute;
        font-size: 3.5rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        color: var(--clr-primary-1);
        transition: var(--transition);
        cursor: pointer;
      }
      &:hover {
        img {
          opacity: 0.5;
        }
        svg {
          opacity: 1;
          &:hover {
            color: orange;
          }
        }
      }
    }
    article {
      display: grid;
      grid-template-rows: 1fr 1fr auto;
      border-top: solid 2px #222;
      padding: 0.5rem;
      gap: 0.5rem;
      p {
        font-size: 1.25rem;
      }
    }
  }

  .tag-container {
    display: grid;
    margin: 1rem 0;
    p {
      letter-spacing: 1px;
    }
  }

  .link-container {
    display: flex;
    justify-content: center;
    a {
      font-size: 1.5rem;
      letter-spacing: var(--spacing);
      padding: 0.5rem 0.75rem;
      color: whitesmoke;
      transition: var(--transition);
    }
  }

  .btn-container {
    width: 95%;
    background: bisque;
    margin: 0rem auto;
    text-align: center;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 600px) {
    .main-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      padding: 5rem;
    }
  }
`;

export default FeaturedAnimals;
