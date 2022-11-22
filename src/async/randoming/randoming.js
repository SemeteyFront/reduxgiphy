import { randomAction } from '../reducer';

const asyncRandoming = () => {
  return async (dispatch) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/random?api_key=${process.env.REACT_APP_API_KEY}&tag=&rating=g`,
    )
      .then((response) => response.json())
      .then((json) => dispatch(randomAction(json)));
  };
};

export default asyncRandoming;
