import './Navigation.css';
import '../Link/Link.css';
import '../Header/Header.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ProfileButton from '../ProfileButton/Profilebutton.js';

function Navigation() {

  let { pathname } = useLocation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  return (
    <>
      <nav className='navigation'>
        <NavLink to='/movies' className={pathname !== '/' ? 'navigation__link navigation__link_active link' : 'navigation__link navigation__link_active link navigation__link_color_white'}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={pathname !== '/' ? 'navigation__link link' : 'navigation__link navigation__link_active link navigation__link_color_white'}>Сохраненные фильмы</NavLink>
      </nav>
      <ProfileButton />

      <div className='burger'>
        <div className={isBurgerOpen && 'burger__wrapper'}>
          <button className={isBurgerOpen ? 'burger__button burger__button_opened' :
            (pathname !== '/' ? 'burger__button' : 'burger__button burger__button_color_white')}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={!isBurgerOpen ? 'burger__menu burger__menu_hidden' : 'burger__menu'}>
            <ul className='burger__list'>
              <li className='burger__item'>
                <NavLink to='/' className={pathname === '/' ? 'burger__link burger__link_active link' :
                  'burger__link link'}>Главная</NavLink>
              </li>
              <li className='burger__item'>
                <NavLink to='/movies' className={pathname === '/movies' ? 'burger__link burger__link_active link' :
                  'burger__link link'}>Фильмы</NavLink>
              </li>
              <li className='burger__item'>
                <NavLink to='/saved-movies' className={pathname === '/saved-movies' ? 'burger__link burger__link_active link' :
                  'burger__link link'}>Сохраненные фильмы</NavLink>
              </li>
            </ul>
            <ProfileButton />
          </nav >
        </div>
      </div>
    </>)
}

export default Navigation;