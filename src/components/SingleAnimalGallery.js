import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SingleAnimalGallery = ({ animal }) => {
  const { color } = animal;
  const allImages = animal.img.data;
  const [main, setMain] = useState(allImages[0].attributes.url);

  let mediaQuery = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const tl = gsap.timeline();

    if (mediaQuery) {
      tl.from(".mainImg", { scale: 2 })
        .to(
          ".mask",
          { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" },
          0
        )
        .to(".mask", { scale: 0.95 });
    }
  }, [mediaQuery]);

  return (
    <Wrapper
      style={{
        background: `linear-gradient(0deg, ${color} 0%, #fff 95%)`,
      }}
    >
      <div className="main">
        <div className="mask">
          <img
            className="mainImg"
            src={main}
            alt="an animal"
            style={{ border: `solid 3px ${color}` }}
          />
        </div>
      </div>
      <div className="gallery">
        {allImages.map((item, index) => {
          const img = item.attributes.url;
          return (
            <img
              src={img}
              alt="an animal"
              key={index}
              onClick={() => setMain(allImages[index].attributes.url)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100%;
  padding-bottom: 5rem;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-color: salmon;
    border-radius: 25px;
    .mask {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
      }
    }
  }

  .gallery {
    width: 200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    img {
      padding: 0.15rem;
      cursor: pointer;
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 400px) {
    .main {
      width: 400px;
      height: 400px;
      .mask {
        width: 400px;
        height: 400px;
        img {
          width: 400px;
          height: 400px;
        }
      }
    }

    .gallery {
      width: 400px;
      img {
        height: 175px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .main {
      width: 600px;
      height: 600px;
      .mask {
        width: 600px;
        height: 600px;
        overflow: hidden;
        clip-path: polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%);
        img {
          width: 600px;
          height: 600px;
        }
      }
    }

    .gallery {
      width: 600px;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 50vw;
    padding: 5rem;
  }
`;

export default SingleAnimalGallery;
