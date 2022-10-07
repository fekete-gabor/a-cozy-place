import React, { useEffect, useReducer, useContext } from "react";
import { useMainContext } from "../context/main_context";
import pagination from "../utils/pagination";
import reducer from "../reducers/animal_filter_reducer";
import {
  LOAD_ANIMALS,
  FILTER_ANIMALS,
  CLEAR_ANIMAL_FILTERS,
  UPDATE_FILTERS,
  PAGINATE,
  CHANGE_PAGE_INDEX,
} from "../actions";

const initialState = {
  all_animals: [],
  filtered_animals: [],
  current_index: 0,
  indexes: [],
  paginated: [],
  pinned_news: [],
  filters: {
    name: "",
    type: "összes",
    breed: "összes",
    size: "összes",
    gender: "összes",
  },
};

const AnimalFilterContext = React.createContext();

export const AnimalFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { animals, featured_news } = useMainContext();

  const loadAnimals = () => {
    dispatch({ type: LOAD_ANIMALS, payload: { animals, featured_news } });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value;
    if (e.target.hasAttribute("data-value")) {
      value = e.target.dataset.value;
    } else {
      value = e.target.value;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const filterAnimals = () => {
    dispatch({ type: FILTER_ANIMALS });
  };

  const clearAnimalFilters = () => {
    dispatch({ type: CLEAR_ANIMAL_FILTERS });
  };

  const paginate = () => {
    if (state.all_animals.length === 0) return;
    dispatch({
      type: PAGINATE,
      payload: pagination(state.filtered_animals, 4),
    });
  };

  const changePageIndex = (e) => {
    dispatch({ type: CHANGE_PAGE_INDEX, payload: e });
  };

  useEffect(() => {
    loadAnimals();
    // eslint-disable-next-line
  }, [animals, featured_news]);

  useEffect(() => {
    filterAnimals();
  }, [state.filters]);

  useEffect(() => {
    paginate();
    // eslint-disable-next-line
  }, [state.filtered_animals, state.current_index]);

  return (
    <AnimalFilterContext.Provider
      value={{
        ...state,
        ...state.filters,
        filterAnimals,
        clearAnimalFilters,
        updateFilters,
        changePageIndex,
      }}
    >
      {children}
    </AnimalFilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(AnimalFilterContext);
};
