import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { gsap } from "gsap/dist/gsap";

const SingleAnimalGallery = ({ animal }) => {
  const { color } = animal;
  const images = animal.img.data;
  const [mainImg, setMainImg] = useState(images[0].attributes.url);

  const mediaQuery = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    if (mediaQuery) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainImg",
        },
      });

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
            src={mainImg}
            alt="an animal"
            style={{ border: `solid 3px ${color}` }}
          />
        </div>
      </div>
      <div className="gallery">
        {images.map((item, index) => {
          const img = item.attributes.url;
          return (
            <img
              src={img}
              alt="an animal"
              key={index}
              onClick={() => setMainImg(images[index].attributes.url)}
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

  @media screen and (min-width: 300px) {
    .main {
      width: 300px;
      height: 300px;
      .mask {
        width: 300px;
        height: 300px;
        img {
          width: 300px;
          height: 300px;
        }
      }
    }

    .gallery {
      width: 300px;
      img {
        height: 175px;
      }
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
      margin-top: 2.5rem;
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
    padding: 5rem;

    width: 50vw;
  }
`;

export default SingleAnimalGallery;
