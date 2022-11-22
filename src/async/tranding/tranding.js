import { trandAction } from '../reducer';

const asyncTranding = () => {
  return async (dispatch) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=25&rating=g`,
    )
      .then((response) => response.json())
      .then((json) => dispatch(trandAction(json)));
  };
};

export default asyncTranding;
