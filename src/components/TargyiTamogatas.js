import React, { useEffect } from "react";
import supportBG2 from "../assets/support_bg_2.jpg";
import supportBG from "../assets/support_bg.jpg";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Tamogatas = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1300px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".right-side",
            ease: "power4",
            scrub: true,
            start: "top center",
            end: "bottom 30%",
          },
        });
        tl.fromTo(
          ".right",
          { rotateY: "0deg", filter: "grayscale(100%)" },
          { duration: 1, rotateY: "-10deg", filter: "grayscale(0%)" }
        );
      },
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1300px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".left-side",
            ease: "power4",
            scrub: true,
            start: "top center",
            end: "bottom 30%",
          },
        });
        tl.fromTo(
          ".left",
          { rotateY: "0deg", filter: "grayscale(100%)" },
          { duration: 1, rotateY: "10deg", filter: "grayscale(0%)" }
        );
      },
    });
  }, []);

  return (
    <Wrapper id="targyi-tamogatas">
      <header>
        <h2>tárgyi támogatás</h2>
        <p>
          Összegyűjtöttük, hogy milyen tárgyi támogatásokra van folyamatosan
          szükség. Használt eszközöket ugyanolyan jól tudunk hasznosítani, mint
          az újakat, de kérjük, csak olyan tárgyakat adományozzanak, amelyek még
          használható állapotban vannak, gyógyszerek esetén nem jártak le
          évekkel korábban, élelmiszer esetén nem romlottak…
        </p>
      </header>
      <div className="right-side">
        <div>
          <article>
            <h2>gyógyszerek, egészségügyi eszközök</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <h2>élelmiszer</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <h2>kutya és macska felszerelés</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
        </div>
        <div className="right-img-container">
          <img src={supportBG} alt="piggy bank" className="right" />
        </div>
      </div>
      <div className="left-side">
        <div className="left-img-container">
          <img src={supportBG2} alt="dog and owner" className="left" />
        </div>
        <div>
          <article>
            <h2>takarítószer és takarító eszközök</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <h2>építőanyagok</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <h2>irodai felszerelések</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quos, est.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;

  header {
    text-align: center;
    h2 {
      text-decoration: underline goldenrod;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .left-side,
  .right-side {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 5rem auto;
    padding: 0.25rem;
    text-align: center;
    div {
      margin: 0 auto;
      article {
        display: grid;
        h2 {
          margin: 1rem 0;
          text-decoration: underline orangered;
        }
        li {
          margin: 1rem 0;
          p {
            font-size: 1.25rem;
            font-weight: 600;
          }
        }
      }
    }
  }

  .left-img-container,
  .right-img-container {
    perspective: 500px;
    width: 225px;
    height: 225px;
    margin: 0 auto;
    border-radius: 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      padding: 0.25rem;
      background-color: dodgerblue;
    }
  }

  .left-img-container {
    background: darkorchid;
  }

  .right-img-container {
    background: orange;
  }

  @media screen and (min-width: 300px) {
    header {
      padding: 2.5rem;
      p {
        font-size: 1.25rem;
      }
    }

    .left-side,
    .right-side {
      width: 95vw;
      padding: 2rem;
    }

    .left-img-container,
    .right-img-container {
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (min-width: 500px) {
    header {
      padding: 2.5rem 5rem;
      p {
        font-size: 1.5rem;
      }
    }

    .left-img-container,
    .right-img-container {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (min-width: 550px) {
    .left-side,
    .right-side {
      display: grid;
      place-items: center;
    }

    .left-img-container,
    .right-img-container {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (min-width: 1250px) {
    .left-side,
    .right-side {
      grid-template-columns: repeat(2, 50%);
    }

    .left-img-container,
    .right-img-container {
      width: 550px;
      height: 550px;
    }
  }

  @media screen and (min-width: 1300px) {
    padding: 0rem 3rem;

    .left-img-container,
    .right-img-container {
      width: 600px;
      height: 600px;
    }
  }
`;

export default Tamogatas;
