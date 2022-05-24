import React from "react";
import { useFilterContext } from "../context/animal_filter_context";
import { getUniqueValues } from "../utils/helpers";
import styled from "styled-components";

const AnimalFilterForm = () => {
  const {
    all_animals,
    updateFilters,
    clearAnimalFilters,
    filters: { name, type, breed, size, gender },
  } = useFilterContext();

  const types = getUniqueValues(all_animals, "type");
  const breeds = getUniqueValues(all_animals, "breed");
  const sizes = getUniqueValues(all_animals, "size");
  const genders = getUniqueValues(all_animals, "gender");

  return (
    <Wrapper>
      <div className="main-container">
        <form onSubmit={(e) => e.preventDefault()} id="filter">
          {/* type input */}
          <div className="form-control">
            <h5>Faj</h5>
            <select
              name="type"
              onChange={updateFilters}
              value={type}
              className="form-input"
            >
              {types.map((type, index) => {
                return (
                  <option key={index} value={type} className="option">
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of type input */}
          {type === "macskák" || (
            <>
              {/* breed input */}
              <div className="form-control">
                <h5>Fajta</h5>
                <select
                  name="breed"
                  onChange={updateFilters}
                  value={breed}
                  className="form-input"
                >
                  {breeds.map((breed, index) => {
                    if (breed) {
                      return (
                        <option key={index} value={breed} className="option">
                          {breed}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </select>
              </div>
              {/* end of breed input */}
              {/* size input */}
              <div className="form-control">
                <h5>méret</h5>
                <select
                  name="size"
                  onChange={updateFilters}
                  value={size}
                  className="form-input"
                >
                  {sizes.map((size, index) => {
                    if (size) {
                      return (
                        <option key={index} value={size} className="option">
                          {size}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </select>
              </div>
              {/* end of size input */}
            </>
          )}
          {/* gender input */}
          <div className="form-control">
            <h5>nem</h5>
            <select
              name="gender"
              onChange={updateFilters}
              value={gender}
              className="form-input"
            >
              {genders.map((gender, index) => {
                return (
                  <option key={index} value={gender} className="option">
                    {gender}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of gender input */}
          {/* search input */}
          <div className="form-control">
            <h5>Név</h5>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => updateFilters(e)}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          <button
            className="clear-btn"
            type="button"
            onClick={() => clearAnimalFilters()}
          >
            törlés
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;

  #filter {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    width: 100vw;
    padding: 1rem;
    gap: 1rem;
    background-color: whitesmoke;
    margin-bottom: 3.5rem;
  }

  .form-input,
  .search-input,
  .clear-btn {
    border-radius: 25px;
    width: 200px;
    outline: none;
    border: solid 2px plum;
    padding: 0.75rem;
    background-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 1.5px;
  }

  .form-input {
    cursor: pointer;
  }

  .clear-btn {
    cursor: pointer;
    margin-top: 1.5rem;
    background: transparent;
    color: #222;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: var(--transition);
    &:hover {
      background-color: red;
      color: whitesmoke;
    }
  }

  .option {
    font-size: 1rem;
    text-transform: capitalize;
  }

  @media screen and (min-width: 300px) {
    #filter {
      padding: 1rem 3rem;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 1600px) {
    #filter {
      margin-bottom: 7.5rem;
    }
  }
`;

export default AnimalFilterForm;
