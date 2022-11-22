import { subCategoriesAction } from '../reducer';

const asyncSubcategories = (name) => {
  return async (dispatch) => {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`,
      )
        .then((res) => res.json())
        .then((data) => dispatch(subCategoriesAction(data, name)));
    } catch (error) {
      alert(error);
    }
  };
};

export default asyncSubcategories;
