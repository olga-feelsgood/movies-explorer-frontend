import { NavLink } from 'react-router-dom';
import './Profilebutton.css';
import '../Link/Link.css';

function ProfileButton() {

  return (
    <NavLink to='/profile' className='profile-button link'>Аккаунт</NavLink>
  )
}

export default ProfileButton;