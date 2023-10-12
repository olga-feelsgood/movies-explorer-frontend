import Icon from '../../images/icon-profile.svg';
import { NavLink } from 'react-router-dom';
import './Profilebutton.css';
import '../Link/Link.css';

function ProfileButton() {

  return (
    <NavLink to='/profile' className='profile-button link'>Аккаунт<img className='profile-button__icon' alt='Иконка профиля' src={Icon} /></NavLink>
  )
}

export default ProfileButton;