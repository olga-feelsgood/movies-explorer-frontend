import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Moviescard.css';
import '../Link/Link.css';
import movieCardImage from '../../images/movie_image_example.png';

function MoviesCard() {

  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  function likeMovie() {
    setIsLiked(true)
  }

  return (
    <li className='movies-card'>
      <a className='movies-card__trailer-link link' target='_blank' rel='noreferrer' href='https://github.com'>
        <img className='movies-card__image' alt='Обложка фильма' src={movieCardImage} />
      </a>
      <div className='movies-card__box'>
        <div className='movies-card__container'>
          <h2 className='movies-card__title'>Gimme Danger: История Игги и The Stooges</h2>
          {location.pathname === '/saved-movies'
            ? <button type='button' className='movies-card__button movies-card__button_type_delete' />
            : <button onClick={likeMovie} type='button' className={isLiked ? 'movies-card__button movies-card__button_type_save' : 'movies-card__button'} />
          }
        </div>
        <p className='movies-card__text'>1ч 42м</p>
      </div>
    </li >
  );
}

export default MoviesCard;