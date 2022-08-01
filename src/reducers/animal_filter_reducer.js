import {
  LOAD_ANIMALS,
  FILTER_ANIMALS,
  CLEAR_ANIMAL_FILTERS,
  UPDATE_FILTERS,
  PAGINATE,
  CHANGE_PAGE_INDEX,
} from "../actions";

const animal_filter_reducer = (state, action) => {
  if (action.type === LOAD_ANIMALS) {
    const { animals, featured_news } = action.payload;
    const temp = featured_news.slice(0, 3);
    return {
      ...state,
      all_animals: animals,
      filtered_animals: animals,
      pinned_news: temp,
    };
  }

  if (action.type === UPDATE_FILTERS) {
    let { name, value } = action.payload;

    value = value.toLowerCase();
    if (value === "macskák") {
      return {
        ...state,
        current_index: 0,
        filters: {
          ...state.filters,
          [name]: value,
          breed: "összes",
          size: "összes",
        },
      };
    }
    return {
      ...state,
      current_index: 0,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === FILTER_ANIMALS) {
    const { all_animals } = state;
    const { name, type, breed, size, gender } = state.filters;
    let tempArray = [...all_animals];
    if (name) {
      tempArray = tempArray.filter((animal) =>
        animal.attributes.name.toLowerCase().startsWith(name)
      );
    }

    if (type !== "összes") {
      tempArray = tempArray.filter((animal) => animal.attributes.type === type);
    }

    if (breed !== "összes") {
      tempArray = tempArray.filter(
        (animal) => animal.attributes.breed === breed
      );
    }

    if (size !== "összes") {
      tempArray = tempArray.filter((animal) => animal.attributes.size === size);
    }

    if (gender !== "összes") {
      tempArray = tempArray.filter(
        (animal) => animal.attributes.gender === gender
      );
    }

    return { ...state, filtered_animals: tempArray };
  }

  if (action.type === PAGINATE) {
    const temp = action.payload[state.current_index];
    return { ...state, indexes: action.payload, paginated: temp };
  }

  if (action.type === CHANGE_PAGE_INDEX) {
    return { ...state, current_index: action.payload };
  }

  if (action.type === CLEAR_ANIMAL_FILTERS) {
    return {
      ...state,
      current_index: 0,
      filters: {
        name: "",
        type: "összes",
        breed: "összes",
        size: "összes",
        gender: "összes",
      },
    };
  }

  throw new Error(`No matching ${action.type} action type`);
};

export default animal_filter_reducer;
