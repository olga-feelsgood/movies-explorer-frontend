import './Navigation.css';
import '../Link/Link.css';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from '../../images/icon-profile.svg';

function Navigation() {

  let { pathname } = useLocation();

  return (
    <>
      <nav className='navigation__menu'>
        <NavLink to='/movies' className={pathname !== '/' ? 'navigation__link navigation__link_active link' : 'navigation__link navigation__link_active link navigation_color'}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={pathname !== '/' ? 'navigation__link link' : 'navigation__link navigation__link_active link navigation_color'}>Сохраненные фильмы</NavLink>
      </nav>
      <NavLink to='/profile' className='navigation__account link'>Аккаунт<img className='navigation__account_icon' alt='Иконка профиля' src={Icon} /></NavLink>

      {/* //   <nav className='navigation__menu'>
    //     <ul className='navigation__list'>
    //       <li className='navigation__item'>
    //         <NavLink to='/movies' className='navigation__link link'>Фильмы</NavLink>
    //       </li>
    //     </ul>


    //     <NavLink to='/saved-movies' className='header__link link'>Сохраненные фильмы</NavLink>
    //   </div>
    //   <NavLink to='/profile' className='header__link header__account link'>Аккаунт</NavLink>
    // </nav > */}

    </>)
}

export default Navigation;