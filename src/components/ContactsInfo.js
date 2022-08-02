import React from "react";
import { contacts } from "../utils/helpers";
import styled from "styled-components";

const ContactsInfo = () => {
  return (
    <Wrapper>
      <div>
        <h2>elérhetőségeink</h2>
        <article>
          <p>
            Hétfőn, kedden ZÁRVA vagyunk. Szerdától vasárnapig örökbefogadási
            szándékkal kutyáink 9-13 óra között, cicáink pedig 9-14 óra között
            látogathatóak, előzetes egyeztetést követően (+36-70-123-4567).
          </p>
          <div>
            <ul className="contacts-list">
              {contacts.map((contact) => {
                const { id, title, text, icon } = contact;
                return (
                  <li key={id}>
                    <header>
                      <span>{icon}</span>
                      <h4>{title}</h4>
                    </header>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  display: grid;
  text-align: center;
  padding: 3rem 1rem 0;
  border-bottom: solid 3px #fa4151;

  article {
    p {
      font-size: 1.35rem;
      font-weight: 600;
    }
  }

  .contacts-list {
    padding: 3rem 1rem;
    li {
      margin: 1rem 0;
      header {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        text-decoration: underline orangered;
        span {
          color: orangered;
          font-size: 1.35rem;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    padding: 5rem;
  }
`;

export default ContactsInfo;
