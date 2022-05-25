import React, { useEffect } from "react";
import { socialMedia } from "../utils/helpers";
import { useMainContext } from "../context/main_context";
import formMask from "../assets/form_mask.jpg";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FormMask = () => {
  const { animal_name: name, animal_color: color } = useMainContext();

  let mediaQuery = useMediaQuery("(min-width:992px)");

  const handleChange = () => {
    if (mediaQuery) {
      gsap.to([".form-main", ".form-mask"], { width: "50vw" });
      const top = document.querySelector(".wrapper");
      top.scrollIntoView();
    } else {
      document.querySelector(".form-container").scrollIntoView();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!mediaQuery) {
      gsap.to([".form-main", ".form-mask"], { width: "100vw" });
    }
  }, [mediaQuery]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".form-main",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.set(".info", { autoAlpha: 0 });

    tl.to(".form-mask", {
      clipPath: "circle(100% at 50% 50%)",
    }).to(".info", { autoAlpha: 1 }, 0);
  }, []);

  return (
    <Wrapper className="wrapper">
      <div
        className="form-main"
        style={{ background: `linear-gradient(45deg, ${color} 0%, #fff 80%)` }}
      >
        <div className="form-mask">
          <img src={formMask} alt="dog in a party hat" />
          <div className="info">
            <h2>
              felkeltette <span>{name}</span> az érdeklődésed? <br />
              vedd fel velünk a kapcsolatot,
            </h2>
            <div className="media-icons">
              <ul className="media-icons">
                {socialMedia.map((media) => {
                  const { id, url, icon } = media;
                  return (
                    <li key={id}>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <br />
            <h2> vagy írj nekünk!</h2>
            <div className="button-container" onClick={() => handleChange()}>
              <button className="button">üzenetet küldök</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  min-height: 100vh;

  .form-main {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .form-mask {
      width: 100vw;
      height: 100%;
      overflow: hidden;
      clip-path: circle(50% at 100% 50%);
      img {
        width: 100vw;
        height: 100%;
        object-fit: cover;
      }
      .info {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        h2 {
          color: whitesmoke;
          font-size: clamp(1rem, 1.75rem, 2rem);
          span {
            text-transform: uppercase;
            letter-spacing: 6.5px;
            color: #3cfa75;
          }
        }
      }
    }
  }

  .media-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    a {
      color: whitesmoke;
      font-size: clamp(1rem, 1.75rem, 2rem);
      transition: var(--transition);
      &:hover {
        color: #3cfa75;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    .button {
      cursor: pointer;
      background: none;
      border: solid 2px whitesmoke;
      padding: 1rem;
      color: whitesmoke;
      font-size: clamp(1rem, 1.75rem, 2rem);
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        border-color: #3cfa75;
        color: #3cfa75;
      }
    }
  }
`;

export default FormMask;
