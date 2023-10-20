import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Logo.css';
import '../Link/Link.css';

function Logo() {

  return (
    <Link to='/'> <img className='logo link' src={logo} alt='логотип' /></Link>
  )
}

export default Logo;