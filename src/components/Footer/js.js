// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { asyncTranding } from '../../async/tranding/tranding';
// import './tranding.css';
// let counter = 25;
// function Tranding() {
//   const dispatch = useDispatch();
//   const trand = useSelector((state) => state.trand.data.data);
//   console.log(trand);

//   useEffect(() => {
//     dispatch(asyncTranding(counter));
//   }, [dispatch]);

//   const mapTrand = trand.map((item) => (
//     <img className='trand__img' key={item.id} src={item.images.downsized.url} alt='giphy' />
//   ));

//   const fetchMoreTrand = () => {
//     if (counter > 199) {
//       alert('Больше нет гиф');
//     } else {
//       setTimeout(() => {
//         counter += 5;
//         dispatch(asyncTranding(counter));
//       }, 1000);
//     }
//   };

//   return (
//     <div className='trand'>
//       {
//         trand.length > 0
//         ?
//         {counter > 199 ? (
//           <h1>Нету больше картинок</h1>
//         ) : (
//           <InfiniteScroll
//             dataLength={mapTrand}
//             next={fetchMoreTrand}
//             hasMore={true}
//             loader={<h4>Загрузка</h4>}
//           >
//             {mapTrand}
//           </InfiniteScroll>
//         )}
//         :
//         <div>блаблаблаблабла</div>
//       }
//     </div>
//   );
// }

// export default Tranding;

// import { trandAction } from './trandingReducer';

// export const asyncTranding = (counter) => {
//   return async (dispatch) => {
//     await fetch(
//       `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=${counter}&rating=g`,
//     )
//       .then((response) => response.json())
//       .then((json) => dispatch(trandAction(json)));
//   };
// };
