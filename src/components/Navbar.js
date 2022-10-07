import React from "react";
import logo from "../assets/logo.png";
import { links, socialMedia } from "../utils/helpers";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useMainContext } from "../context/main_context";
import { useFilterContext } from "../context/animal_filter_context";

const Navbar = () => {
  const { openSidebar } = useMainContext();
  const { clearAnimalFilters } = useFilterContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={logo} alt="a cozy place" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? "link active-link" : "link"
                  }
                  onClick={() => clearAnimalFilters()}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: min-content;
  background: #bcffa0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-top: 6px;
      width: 175px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links,
  .media-icons {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      overflow: hidden;
    }

    .link {
      cursor: pointer;
      color: var(--clr-primary-5);
      font-size: 1.2rem;
      font-weight: 600;
      text-decoration: none;
      text-transform: capitalize;
      padding: 2rem 0.5rem;
      transition: var(--transition);
      &:hover {
        background-color: orange;
        color: whitesmoke;
      }
    }

    .active-link {
      background-color: rgb(239, 80, 48);
      color: whitesmoke;
    }

    .media-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      a {
        color: var(--clr-primary-5);
        font-size: 1.5rem;
        transition: var(--transition);
        &:hover {
          color: orange;
        }
      }
    }
  }
`;

export default Navbar;
