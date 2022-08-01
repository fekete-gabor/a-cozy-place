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

const main_reducer = (state, action) => {
  // ***** SIDEBAR *****
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, is_sidebar_open: true };
  }

  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, is_sidebar_open: false };
  }

  // ***** ALERT *****
  if (action.type === SET_ALERT) {
    return {
      ...state,
      alert: true,
      alertText: action.payload,
    };
  }

  if (action.type === REMOVE_ALERT) {
    return { ...state, alert: false, alertText: "" };
  }

  // ***** FETCH ANIMALS *****
  if (action.type === FETCH_ANIMALS_BEGIN) {
    return { ...state, is_loading: true };
  }

  if (action.type === FETCH_ANIMALS_SUCCESS) {
    const featured_animals = action.payload.filter(
      (animal) => animal.attributes.featured === true
    );

    const temp = action.payload
      .map((animal) => animal.attributes.img.data)
      .map((animal) => {
        return animal.map((item) => item.attributes.url);
      })
      .map((value) => {
        return value.map((url) => url);
      })
      .flat()
      .slice(0, 20);

    return {
      ...state,
      is_loading: false,
      animals: action.payload,
      featured_animals,
      support_header_images: temp,
    };
  }

  if (action.type === FETCH_ANIMALS_ERROR) {
    return { ...state, is_loading: false, is_error: true };
  }

  // ***** FETCH SINGLE ANIMAL *****
  if (action.type === FETCH_SINGLE_ANIMAL_BEGIN) {
    return {
      ...state,
      single_animal_loading: true,
      single_animal_error: false,
    };
  }

  if (action.type === FETCH_SINGLE_ANIMAL_SUCCESS) {
    const name = action.payload.attributes.name;
    const color = action.payload.attributes.color;
    return {
      ...state,
      single_animal_loading: false,
      single_animal_error: false,
      single_animal: action.payload,
      animal_name: name,
      animal_color: color,
    };
  }

  if (action.type === FETCH_SINGLE_ANIMAL_ERROR) {
    return {
      ...state,
      single_animal_loading: false,
      single_animal_error: true,
    };
  }

  // ***** FETCH NEWS *****
  if (action.type === FETCH_NEWS_BEGIN) {
    return { ...state, is_loading: true };
  }

  if (action.type === FETCH_NEWS_SUCCESS) {
    const featured = action.payload.filter(
      (news) => news.attributes.featured === true
    );

    return {
      ...state,
      is_loading: false,
      news: action.payload,
      featured_news: featured,
    };
  }

  if (action.type === FETCH_NEWS_ERROR) {
    return { ...state, is_loading: false, is_error: true };
  }

  if (action.type === PAGINATE) {
    const temp = action.payload[state.current_index];
    return { ...state, indexes: action.payload, paginated: temp };
  }

  if (action.type === CHANGE_PAGE_INDEX) {
    return { ...state, current_index: action.payload };
  }

  // ***** FETCH SINGLE NEWS *****
  if (action.type === FETCH_SINGLE_NEWS_BEGIN) {
    return { ...state, single_news_loading: true, single_news_error: false };
  }

  if (action.type === FETCH_SINGLE_NEWS_SUCCESS) {
    return {
      ...state,
      single_news_loading: false,
      single_news_error: false,
      single_news: action.payload,
    };
  }

  if (action.type === FETCH_SINGLE_NEWS_ERROR) {
    return { ...state, single_news_loading: false, single_news_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;
