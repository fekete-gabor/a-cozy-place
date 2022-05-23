import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/main_reducer";
import pagination from "../utils/pagination";
import {
  all_animals_url,
  single_animal_url,
  all_news_url,
  single_news_url,
} from "../utils/helpers";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_ALERT,
  REMOVE_ALERT,
  FETCH_ANIMALS_BEGIN,
  FETCH_ANIMALS_SUCCESS,
  FETCH_ANIMALS_ERROR,
  FETCH_SINGLE_ANIMAL_BEGIN,
  FETCH_SINGLE_ANIMAL_SUCCESS,
  FETCH_SINGLE_ANIMAL_ERROR,
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  FETCH_SINGLE_NEWS_BEGIN,
  FETCH_SINGLE_NEWS_SUCCESS,
  FETCH_SINGLE_NEWS_ERROR,
  PAGINATE,
  CHANGE_PAGE_INDEX,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  alert: false,
  alertText: "",
  isLoading: false,
  isError: false,
  animals: [],
  single_animal_loading: true,
  single_animal_error: false,
  single_animal: {},
  featured_animals: [],
  news: [],
  single_news_loading: true,
  single_news_error: false,
  single_news: {},
  featured_news: [],
  current_index: 0,
  indexes: [],
  paginated: [],
  animal_color: "",
  animal_name: "",
  all_urls: [],
};

const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // sidebar
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  // alert
  const setAlert = (alertText) => {
    dispatch({ type: SET_ALERT, payload: alertText });
  };

  const stopAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  // fetch animals
  const fetchAnimals = async () => {
    dispatch({ type: FETCH_ANIMALS_BEGIN });
    try {
      const response = await axios.get(all_animals_url);
      const payload = await response.data.data;
      dispatch({ type: FETCH_ANIMALS_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_ANIMALS_ERROR });
    }
  };

  const fetchSingleAnimal = async (id) => {
    dispatch({ type: FETCH_SINGLE_ANIMAL_BEGIN });
    try {
      const response = await axios.get(`${single_animal_url}${id}?populate=*`);
      const payload = response.data.data;
      dispatch({ type: FETCH_SINGLE_ANIMAL_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_ANIMAL_ERROR });
    }
  };

  // fetch news
  const fetchNews = async () => {
    dispatch({ type: FETCH_NEWS_BEGIN });
    try {
      const response = await axios.get(all_news_url);
      const payload = await response.data.data;
      dispatch({ type: FETCH_NEWS_SUCCESS, payload });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_NEWS_ERROR });
    }
  };

  const fetchSingleNews = async (id) => {
    dispatch({ type: FETCH_SINGLE_NEWS_BEGIN });
    try {
      const response = await axios.get(`${single_news_url}${id}?populate=*`);
      const payload = await response.data.data;
      dispatch({ type: FETCH_SINGLE_NEWS_SUCCESS, payload });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_SINGLE_NEWS_ERROR });
    }
  };

  const paginate = () => {
    if (state.news.length === 0) return;
    dispatch({
      type: PAGINATE,
      payload: pagination(state.news, 6),
    });
  };

  const changePageIndex = (e) => {
    dispatch({ type: CHANGE_PAGE_INDEX, payload: e });
  };

  useEffect(() => {
    fetchAnimals();
    fetchNews();
  }, []);

  useEffect(() => {
    paginate();
  }, [state.news, state.current_index]);

  return (
    <MainContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setAlert,
        stopAlert,
        fetchSingleAnimal,
        fetchSingleNews,
        changePageIndex,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
