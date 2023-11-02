import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Moviescard.css';
import '../Link/Link.css';
import moviesApi from '../../utils/MoviesApi';

function MoviesCard(props) {

  const location = useLocation();

  function likeOrDislikeMovie() {
    if (props.isLiked) {
      props.onDislike(props.savedMovies.find((c) => c.movieId === props.movie.id))
    } else {
      props.onLike(props.movie);
    }
  }

function deleteMovie() {
  props.onDislike(props.movie);
}

  function formatTime(duration) {
    const min = duration % 60;
    const hour = Math.floor(duration / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  }

  console.log(props.movie.image)

  return (
    <li className='movies-card'>
      <a className='movies-card__trailer-link link' target='_blank' rel='noreferrer' href={props.movie.trailerLink}>
        <img className='movies-card__image' alt='Обложка фильма' src = { location.pathname === '/saved-movies' ? props.movie.image : moviesApi._url + props.movie.image.url } />
      </a>
      <div className='movies-card__box'>
        <div className='movies-card__container'>
          <h2 className='movies-card__title'>{props.movie.nameRU}</h2>
          {location.pathname === '/saved-movies'
            ? <button onClick={deleteMovie} type='button' className='movies-card__button movies-card__button_type_delete' />
            : <button onClick={likeOrDislikeMovie} type='button' className={props.isLiked ? 'movies-card__button movies-card__button_type_save' : 'movies-card__button'} />
          }
        </div>
        <p className='movies-card__text'>{formatTime(props.movie.duration)}</p>
      </div>
    </li >
  );
}

export default MoviesCard;