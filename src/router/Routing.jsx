import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Categories from '../pages/Categoies';
import Tranding from '../pages/Trand';
import SubCategories from '../pages/SubCategories';
import Randoming from '../pages/Random/';
import './routing.css';

function Routing() {
  const categories = useSelector((state) => state.reducer.categories.data);
  const mapSubCategories =
    categories &&
    categories.map((category) => {
      <Route
        key={category.name_encoded}
        path={`/${category.name_encoded}`}
        element={<SubCategories name={category.name_encoded} />}
      />;
    });
  return (
    <div className='router'>
      <Categories categories={categories} />
      <Routes>
        <Route index element={<Tranding />} />
        <Route path='/random' element={<Randoming />} />
        {mapSubCategories}
        <Route path='*' element={<p>Element not resolved</p>} />
      </Routes>
    </div>
  );
}

export default Routing;
