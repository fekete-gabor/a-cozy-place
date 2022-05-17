import React from "react";
import logo from "../assets/logo.png";
import { Alert, Adoszam } from "../components/index";
import { links, socialMedia } from "../utils/helpers";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/main_context";
import { useFilterContext } from "../context/animal_filter_context";
import styled from "styled-components";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, alert } = useMainContext();
  const { clearAnimalFilters } = useFilterContext();

  const handleChange = () => {
    closeSidebar();
    clearAnimalFilters();
  };

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="nav-center">
          <div className="sidebar-header">
            <img src={logo} alt="a cozy place - animal shelter logo" />
            <button className="close-btn" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={() => handleChange()}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="media-icons">
          {socialMedia.map((media) => {
            const { id, url, icon } = media;
            return (
              <li key={id}>
                <a href={url} onClick={closeSidebar}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <Adoszam />
      </aside>
      {alert && <Alert />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  z-index: 998;
  width: 100%;
  background-color: #bcffa0;

  .nav-center {
    background: var(--clr-primary-1);
    height: 80px;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    height: 80px;
    img {
      width: 175px;
    }
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    &:hover {
      color: var(--clr-red-light);
    }
  }

  .nav-links a,
  .media-icons a,
  p {
    cursor: pointer;
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: whitesmoke;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .nav-links a:hover,
  .media-icons a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-primary-1);
    color: var(--clr-grey-2);
  }

  .media-icons {
    display: flex;
    margin-bottom: 4rem;
  }

  .media-icons a:hover {
    padding: 1rem 1.5rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    z-index: -1;
    opacity: 0;
  }

  .show-sidebar {
    overflow-y: scroll;
    background-color: var(--clr-primary-5);
    z-index: 999;
    opacity: 1;
  }

  .container {
    width: 40%;
    min-width: 150px;
    background: whitesmoke;
    border-radius: 25px;
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    cursor: pointer;
    p {
      color: #222;
      font-size: 1.25rem;
      text-align: center;
    }
    span {
      color: #222;
      font-size: 2rem;
      border-radius: 25px;
      transition: var(--transition);
    }
    &:hover span {
      color: orangered;
    }
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
