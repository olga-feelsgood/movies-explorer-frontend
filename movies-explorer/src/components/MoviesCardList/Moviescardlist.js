import './Moviescardlist.css';
import MoviesCard from '../MoviesCard/Moviescard.js'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  initialMoviesNumberDesktop,
  initialMoviesNumberMobile,
  initialMoviesNumberMiniTablet,
  initialMoviesNumberTablet,
  addMoviesNumberDesktop,
  addMoviesNumberTablet,
  addMoviesNumberMiniTabletOrMobile
} from '../../utils/constants.js'

function MoviesCardList(props) {

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTablet = useMediaQuery({ minWidth: 990, maxWidth: 1279 });
  const isMiniTablet = useMediaQuery({ minWidth: 768, maxWidth: 989 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [moviesToDisplay, setMoviesToDisplay] = useState(0);// сколько фильмов отображать

  useEffect(() => {
    const initialNumber = (() => {
      if (isMobile) { return initialMoviesNumberMobile; }
      if (isTablet) { return initialMoviesNumberTablet; }
      if (isMiniTablet) { return initialMoviesNumberMiniTablet; }
      if (isDesktop) { return initialMoviesNumberDesktop }
    })();
    setMoviesToDisplay(initialNumber);
  }, [props.movies, isDesktop, isTablet, isMiniTablet, isMobile])

  const addMoreMoviesButtonClick = () => {
    const addMoreMovies = (() => {
      if (isMobile || isMiniTablet) { return addMoviesNumberMiniTabletOrMobile; }
      if (isTablet) { return addMoviesNumberTablet; }
      if (isDesktop) { return addMoviesNumberDesktop; }
    })();
    setMoviesToDisplay(moviesToDisplay + addMoreMovies);
  };

  const isAddButtonActive = (() => {
    return props.movies.slice(0, moviesToDisplay).length === props.movies.length ? false : true;
  })();

  function checkIsLiked(savedMoviesList, movie) {
    return savedMoviesList.find((savedMoviesList)=>savedMoviesList.movieId === movie.id);
  }

  return (
    <section className='movies-cardlist'>
      {props.isMoviesNotFound ? <p className='movies-cardlist__notfound'>Ничего не найдено</p> : undefined}
      <ul className='movies-cardlist__list'>
        {props.movies.slice(0, moviesToDisplay).map(movie =>
          <MoviesCard
            movie={movie}
            key={movie.id}
            onLike={props.onLike}
            savedMovies={props.savedMovies}
            isSaved={false}
            isLiked={checkIsLiked(props.savedMovies, movie)}
          />)}
      </ul>
      {isAddButtonActive ? <button type='button' className='movies-cardlist__button' onClick={addMoreMoviesButtonClick}>Еще</button> : undefined}
    </section>
  );
}

export default MoviesCardList;