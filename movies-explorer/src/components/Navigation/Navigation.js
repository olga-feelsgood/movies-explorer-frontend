import './Navigation.css';
import '../Link/Link.css';
import '../Header/Header.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../../images/icon-profile.svg';

function Navigation() {

  let { pathname } = useLocation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  return (
    <>
      <nav className='navigation__menu'>
        <NavLink to='/movies' className={pathname !== '/' ? 'navigation__link navigation__link_active link' : 'navigation__link navigation__link_active link navigation_color'}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={pathname !== '/' ? 'navigation__link link' : 'navigation__link navigation__link_active link navigation_color'}>Сохраненные фильмы</NavLink>
      </nav>
      <NavLink to='/profile' className='navigation__account link'>Аккаунт<img className='navigation__account_icon' alt='Иконка профиля' src={Icon} /></NavLink>


      <div className={isBurgerOpen && 'navigation__wrapper'}>
        <button className={isBurgerOpen ? 'navigation__burger-button navigation__burger-button_opened' : 'navigation__burger-button'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={!isBurgerOpen ? 'navigation__burger_hidden' : 'navigation__burger'}>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <NavLink to='/' className='navigation__burger-link link'>Главная</NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/movies' className='navigation__burger-link link'>Фильмы</NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/saved-movies' className='navigation__burger-link link'>Сохраненные фильмы</NavLink>
            </li>
          </ul>
          <NavLink to='/profile' className='navigation__profile link'>Аккаунт<img className='navigation__account_icon' alt='Иконка профиля' src={Icon} /></NavLink>
        </nav >
      </div>
    </>)
}

export default Navigation;