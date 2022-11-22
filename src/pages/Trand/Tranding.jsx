import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asyncTranding from '../../async/tranding';
import spinner from '../../images/spinner.svg';
import './tranding.css';

function Tranding() {
  const dispatch = useDispatch();
  const trand = useSelector((state) => state.reducer.trand.data);
  console.log(trand);

  useEffect(() => {
    dispatch(asyncTranding());
  }, [dispatch]);

  return (
    <div className='trand'>
      {trand && trand.length > 0 ? (
        trand.map((item) => (
          <img className='trand__img' key={item.id} src={item.images.downsized.url} alt='giphy' />
        ))
      ) : (
        <div className='trand__loading'>
          Загрузка...
          <img className='trand__spinner' src={spinner} alt='Spinner' />
        </div>
      )}
    </div>
  );
}

export default Tranding;
