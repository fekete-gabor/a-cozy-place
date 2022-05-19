import React, { useEffect } from "react";
import intern from "../assets/intern.jpg";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Internship = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1300px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".intern-container",
            ease: "power4",
            scrub: true,
            start: "top center",
            end: "bottom 30%",
          },
        });
        tl.fromTo(
          ".intern",
          { rotateY: "0deg", filter: "grayscale(100%)" },
          { duration: 1, rotateY: "-10deg", filter: "grayscale(0%)" }
        );
      },
    });
  }, []);

  return (
    <Wrapper>
      <header>
        <h2 id="onkentes-munka">önkéntes munka</h2>
        <p>
          A menhely szűkös anyagi forrásokkal rendelkezik. Ennek okán az
          állatokat ellátó gondozók, bár minden tőlük telhetőt megtesznek, mégis
          túlterheltek és segítségre szorulnak. Az önkéntesek munkája
          hihetetlenül fontos segítség. Ha úgy gondolod, hogy segíteni tudsz,
          kérlek, figyelmesen olvass tovább. Mindenekelőtt felhívjuk kedves
          leendő önkénteseink figyelmét, hogy a menhely fizetni nem tud az
          önkéntes tevékenységért, jelenlegi önkénteseink is az állatok iránti
          szeretetből dolgoznak. Mivel a menhelyen végzett tevékenység veszélyes
          lehet, ezért 18 év alatti személy a telepen csak szülői felügyelettel
          tartózkodhat és végezhet önkéntes tevékenységet! A menhelyen alkohol
          fogyasztása szigorúan tilos! Az önkéntesség önzetlen jószolgálati
          tevékenység, melyet csak teljes szívvel, odaadással, az állatok iránti
          szeretettel és tisztelettel lehet végezni. A menhelyen állatokkal,
          saját érzésekkel, saját döntéssel bíró élőlényekkel dolgozunk együtt.
          Ez a munka sok csodát, kellemes órát, élményekkel és örömökkel teli
          percet ad, de ugyanakkor veszélyeket is rejthet, így a balesetek
          elkerülése végett minden önkéntes köteles betartani a telepvezetők és
          a gondozók utasításait, valamint felelősségvállalási nyilatkozatot ír
          alá, melyben kijelenti, hogy betartja és elfogadja a menhely
          szabályait a saját és a védenceink érdekében is. A tevékenységek,
          melyeket végezhetsz, sokban függnek attól, hogy milyen
          rendszerességgel és mennyi időt tudsz/szeretnél a menhelyen tölteni.
        </p>
      </header>
      <div className="intern-container">
        <div>
          <article>
            <h2>Önkéntes munkák állandó/tapasztalt önkéntesek számára:</h2>
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
            <h2>
              Önkéntes munkák nem állandó/kevés tapasztalattal rendelkező
              önkéntesek számára:
            </h2>
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
            <h2>Jótanácsok kezdő önkénteseknek:</h2>
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
        <div className="img-container">
          <img src={intern} alt="piggy bank" className="intern" />
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

  .intern-container {
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

  .img-container {
    perspective: 500px;
    width: 225px;
    height: 225px;
    margin: 0 auto;
    background-color: hotpink;
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

  @media screen and (min-width: 300px) {
    header {
      padding: 2.5rem;
      p {
        font-size: 1.25rem;
      }
    }

    .intern-container {
      width: 95vw;
      padding: 2rem;
    }

    .img-container {
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

    .img-container {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (min-width: 550px) {
    .intern-container {
      display: grid;
      place-items: center;
    }

    .img-container {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (min-width: 1250px) {
    .intern-container {
      grid-template-columns: repeat(2, 50%);
    }

    .img-container {
      width: 550px;
      height: 550px;
    }
  }

  @media screen and (min-width: 1300px) {
    padding: 0rem 3rem;

    .img-container {
      width: 600px;
      height: 600px;
    }
  }
`;

export default Internship;
