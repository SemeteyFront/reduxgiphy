import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <NavLink className='header__link' to='/'>
          <div className='header__logo'>
            <img className='heeder__img' src={logo} alt='logo' />
            <p className='header__title'>GIPHY</p>
          </div>
        </NavLink>
        <nav className='header__nav'>
          <ul className='nav__list'>
            <li className='list-name'>
              <NavLink className='list-name__link' to='/'>
                Трендовые
              </NavLink>
            </li>
            <li className='list-name'>
              <NavLink className='list-name__link' to='/random'>
                Рандомный
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
