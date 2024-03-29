import './Moviescardlist.css';
import MoviesCard from '../MoviesCard/Moviescard.js'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  INITIALMOVIESNUMBERDESKTOP,
  INITIALMOVIESNUMBERTABLET,
  INITIALMOVIESNUMBERMINITABLET,
  INITIALMOVIESNUMBERMOBILE,
  ADDMOVIESNUMBERDESKTOP,
  ADDMOVIESNUMBERTABLET,
  ADDMOVIESNUMBERMINITABLETORMOBILE
} from '../../utils/constants.js'
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTablet = useMediaQuery({ minWidth: 990, maxWidth: 1279 });
  const isMiniTablet = useMediaQuery({ minWidth: 768, maxWidth: 989 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [moviesToDisplay, setMoviesToDisplay] = useState(0);// сколько фильмов отображать
  const location = useLocation();

  useEffect(() => {
    const initialNumber = (() => {
      if (isMobile) { return INITIALMOVIESNUMBERMOBILE; }
      if (isTablet) { return INITIALMOVIESNUMBERTABLET; }
      if (isMiniTablet) { return INITIALMOVIESNUMBERMINITABLET; }
      if (isDesktop) { return INITIALMOVIESNUMBERDESKTOP }
    })();
    setMoviesToDisplay(initialNumber);
  }, [props.movies, isDesktop, isTablet, isMiniTablet, isMobile])

  const addMoreMoviesButtonClick = () => {
    const addMoreMovies = (() => {
      if (isMobile || isMiniTablet) { return ADDMOVIESNUMBERMINITABLETORMOBILE; }
      if (isTablet) { return ADDMOVIESNUMBERTABLET; }
      if (isDesktop) { return ADDMOVIESNUMBERDESKTOP; }
    })();
    setMoviesToDisplay(moviesToDisplay + addMoreMovies);
  };

  const isAddButtonActive = (() => {
    return props.movies.slice(0, moviesToDisplay).length === props.movies.length ? false : true;
  })();

  function checkIsLiked(savedMoviesList, movie) {
    return savedMoviesList.find((savedMoviesList) => savedMoviesList.movieId === movie.id);
  }

  return (
    <section className='movies-cardlist'>
      {props.isMoviesNotFound ? <p className='movies-cardlist__notfound'>Ничего не найдено</p> : undefined}
      <ul className='movies-cardlist__list'>
        {props.movies.slice(0, moviesToDisplay).map(movie =>
          <MoviesCard
            movie={movie}
            key={movie.id || movie.movieId}
            onLike={props.onLike}
            onDislike={props.onDislike}
            savedMovies={props.savedMovies}
            isLiked={checkIsLiked(props.savedMovies, movie)}
          />)}
      </ul>
      {location.pathname === '/movies' && isAddButtonActive ? <button type='button' className='movies-cardlist__button' onClick={addMoreMoviesButtonClick}>Еще</button> : undefined}
    </section>
  );
}

export default MoviesCardList;