import { useState } from 'react';
import './Header.css';
import '../Section/Section.css';
import '../Link/Link.css';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

function Header() {

  let { pathname } = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const notLoggedInMenu = <nav className='header__menu'>
    <NavLink to='/signup' className='header__link header__link_type_registration link'>Регистрация</NavLink>
    <NavLink to='/signin' className='header__link header__link_type_login link'>Войти</NavLink>
  </nav>

  return (
    <header className={pathname !== '/' ? 'header section' : 'header section header_bg-color_blue'}>
      <div className='header__container'>
        <Logo />
        {isLoggedIn ? <Navigation /> : notLoggedInMenu}
      </div>
    </header >)
}

export default Header;