import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import asyncSubcategories from '../../async/subcategories';
import asyncCategories from '../../async/categories';
import './categories.css';

function Categories({ categories }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCategories());
  }, []);
  return (
    <nav>
      <ul className='category__list'>
        {categories &&
          categories.map((category) => (
            <NavLink
              onClick={() => dispatch(asyncSubcategories(category.name_encoded))}
              to={category.name_encoded}
              key={category.name_encoded}
            >
              {category.name}
            </NavLink>
          ))}
      </ul>
    </nav>
  );
}

export default Categories;
