import { categoriesAction } from '../reducer';

const asyncCategories = () => {
  return async (dispatch) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/categories?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => dispatch(categoriesAction(data)));
  };
};

export default asyncCategories;
