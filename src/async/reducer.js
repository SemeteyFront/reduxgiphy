import { ADD_TRAND, ADD_RANDOM, ADD_CATEGORIES, ADD_SUBCATEGORIES } from './types';

const defaultState = {
  trand: [],
  random: [],
  categories: [],
  subcategories: [],
  name: '',
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TRAND:
      return { ...state, trand: action.payload };
    case ADD_RANDOM:
      return { ...state, random: action.payload };
    case ADD_CATEGORIES:
      return { ...state, categories: action.payload };
    case ADD_SUBCATEGORIES:
      return { ...state, subcategories: action.payload, name: action.name };
    default:
      return state;
  }
};

export const trandAction = (payload) => ({ type: ADD_TRAND, payload });
export const randomAction = (payload) => ({ type: ADD_RANDOM, payload });
export const categoriesAction = (payload) => ({ type: ADD_CATEGORIES, payload });
export const subCategoriesAction = (payload, name) => ({
  type: ADD_SUBCATEGORIES,
  payload,
  name,
});
