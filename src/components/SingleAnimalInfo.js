import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdPaw, IoIosPaw } from "react-icons/io";
import { useMainContext } from "../context/main_context";

const SingleAnimalInfo = ({ animal }) => {
  const {
    name,
    breed,
    size,
    color,
    gender,
    type,
    status,
    date_of_birth: dob,
    date_of_registry: dor,
    things_i_like: like,
  } = animal;
  const desc = animal.desc[0].children[0].text;

  const { checkIfReserved } = useMainContext();

  useEffect(() => {
    checkIfReserved(status);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div
        className="title-container"
        style={{ borderBottom: `solid 2px ${color}` }}
      >
        <h1>
          Szia, az én nevem <span>{name}</span>!
        </h1>
      </div>
      <div className="tag-container">
        {breed && (
          <div>
            <p style={{ textDecoration: `underline ${color}` }}>fajta:</p>
            <p>{breed}</p>
          </div>
        )}
        {gender && (
          <div>
            <p style={{ textDecoration: `underline ${color}` }}>nem:</p>
            <p>{gender}</p>
          </div>
        )}
        {size && (
          <div>
            <p style={{ textDecoration: `underline ${color}` }}>méret:</p>
            <p>{size}</p>
          </div>
        )}
        {dob && (
          <div>
            <p style={{ textDecoration: `underline ${color}` }}>
              születési idő:
            </p>
            <p>{dob}</p>
          </div>
        )}
        {dor && (
          <div>
            <p style={{ textDecoration: `underline ${color}` }}>
              hozzánk érkezett:
            </p>
            <p>{dor}</p>
          </div>
        )}
        {status && (
          <div>
            <p
              style={{
                textDecoration: "underline orangered",
                color: "red",
                textTransform: "uppercase",
                fontSize: "2rem",
              }}
            >
              {status}
            </p>
          </div>
        )}
      </div>
      <div className="desc-container">
        {like && <p>{like}</p>}
        <div className="icon-container">
          {type === "kutyák" ? (
            <>
              <IoMdPaw style={{ color: color }} />
              <IoMdPaw style={{ color: color }} />
              <IoMdPaw style={{ color: color }} />
            </>
          ) : (
            <>
              <IoIosPaw style={{ color: color }} />
              <IoIosPaw style={{ color: color }} />
              <IoIosPaw style={{ color: color }} />
            </>
          )}
        </div>
        <p>{desc}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 2rem 1.25rem;
  text-align: left;
  background: transparent;

  .title-container {
    h1 {
      text-transform: unset;
    }
    span {
      text-transform: uppercase;
    }
  }

  .tag-container {
    margin: 3rem 0;
    div {
      display: flex;
      gap: 1rem;
      p {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }

  .desc-container {
    font-size: 1.45rem;
  }

  .icon-container {
    display: flex;
    margin: 2rem 0;
    svg {
      display: block;
      margin: 0 auto;
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 400px) {
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 1400px) {
    padding: 5rem;
    width: 50vw;
  }
`;

export default SingleAnimalInfo;
