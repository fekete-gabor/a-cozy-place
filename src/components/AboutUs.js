import React, { useEffect } from "react";
import about_bg from "../assets/about_bg.jpg";
import about_bg_2 from "../assets/about_bg_2.jpg";
import about_bg_3 from "../assets/about_bg_3.jpg";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1300px)": function () {
        gsap.utils.toArray(".bg-container").forEach((section, index) => {
          section.bg = section.querySelector(".bg");
          const innerHeight = section.bg.getBoundingClientRect().height;

          if (index) {
            section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

            gsap.to(section.bg, {
              backgroundPosition: `50% ${innerHeight / 2}px`,
              ease: "linear",
              scrollTrigger: {
                trigger: section,
                scrub: true,
              },
            });
          } else {
            section.bg.style.backgroundPosition = "50% 0px";

            gsap.to(section.bg, {
              backgroundPosition: `50% ${innerHeight / 2}px`,
              ease: "linear",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="bg-container">
        <div
          className="bg"
          style={{ background: `url(${about_bg}) center/cover no-repeat` }}
        ></div>
        <article>
          <h2>történetünk</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error
            vitae ratione sunt atque est. Error dolorum saepe fugiat nemo, totam
            optio maxime iure nihil esse, asperiores libero. Odit aspernatur
            quasi optio laboriosam nihil enim, minima ad officia neque mollitia.
          </p>
        </article>
      </div>
      <div className="bg-container">
        <div
          className="bg"
          style={{ background: `url(${about_bg_2}) center/cover no-repeat` }}
        ></div>
        <article>
          <h2>később a gyepmesteri feladatokat is a menhely vette át</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, nesciunt enim officiis, quam consequatur eum quibusdam
            recusandae incidunt voluptate eos, expedita fuga quod quas
            voluptatem natus! Expedita, necessitatibus corrupti, nihil impedit
            harum velit recusandae voluptatibus nostrum dolores saepe obcaecati
            fugit deserunt laudantium assumenda aliquid ducimus laboriosam,
            asperiores qui corporis quod.
          </p>
        </article>
      </div>
      <div className="bg-container">
        <div
          className="bg"
          style={{ background: `url(${about_bg_3}) center/cover no-repeat` }}
        ></div>
        <article>
          <h2>védenceink lelkiismeretes egészségügyi ellátásban részesülnek</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad cum
            ex suscipit corporis. Autem facilis voluptas sunt unde enim magni
            nobis omnis et! Magni, eveniet! Necessitatibus autem exercitationem
            possimus amet et fuga dignissimos ratione, iste alias ex repellendus
            nesciunt in deleniti accusantium aperiam aliquam.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;

  .bg-container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    article {
      max-width: 900px;
      gap: 2rem;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      background-color: whitesmoke;
      border-radius: 25px;
      border: solid 3px orange;
      p {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (min-width: 600px) {
    .bg-container {
      article {
        padding: 2rem 5rem;
      }
    }
  }
`;

export default AboutUs;
