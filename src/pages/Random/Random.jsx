import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncRandoming from '../../async/randoming';
import spinner from '../../images/spinner.svg';
import './random.css';

function Randoming() {
  const dispatch = useDispatch();
  const random = useSelector((state) => state.reducer.random.data);
  console.log(random);

  useEffect(() => {
    dispatch(asyncRandoming());
  }, [dispatch]);

  return (
    <div className='random'>
      {random ? (
        <img
          className='random__img'
          key={random.id}
          src={random.images.downsized.url}
          alt='giphy'
        />
      ) : (
        <div className='random__loading'>
          Загрузка...
          <img className='random__spinner' src={spinner} alt='Spinner' />
        </div>
      )}
    </div>
  );
}

export default Randoming;
