import { useLocation } from 'react-router-dom';
import './Moviescard.css';
import '../Link/Link.css';
import movieCardImage from '../../images/movie_image_example.png';

function MoviesCard() {

  const location = useLocation();

  return (
    <li className='movies-card'>
      <a className='movies-card__trailer-link link' target='_blank' href='https://github.com'>
        <img className='movies-card__image' alt='Обложка фильма' src={movieCardImage} />
      </a>
      <div className='movies-card__box'>
      <div className='movies-card__container'>
        <h2 className='movies-card__title'>Gimme Danger: История Игги и The Stooges</h2>
        <button type='button' className={location.pathname === '/movies'
          ? 'movies-card__button movies-card__button_type_save'
          : 'movies-card__button movies-card__button_type_delete'} />
      </div>
      <p className='movies-card__text'>1ч 42м</p>
      </div>
    </li >
  );
}

export default MoviesCard;