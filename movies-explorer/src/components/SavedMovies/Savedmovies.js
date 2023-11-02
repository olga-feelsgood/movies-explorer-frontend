import './Savedmovies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import { filterByTitleMovies, filterShortMovies } from '../../utils/utils';
import { useState, useEffect } from 'react';

function SavedMovies(props) {

  const [isShort, setIsShort] = useState(false);
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputQuery, setInputQuery] = useState('');

  function searchAmongSavedMovies(inputQuery) {
    setInputQuery(inputQuery)
  }

  function handleShortMovies() {
    const result = !isShort;
    setIsShort(result);
  }

  //Отображать фильмы при изменении чекбокса, поискового запроса
  useEffect(() => {
    const filteredSavedMovies = filterByTitleMovies(props.savedMovies, inputQuery)
    setFilteredMovies(isShort ? filterShortMovies(filteredSavedMovies) : filteredSavedMovies);
  }, [props.savedMovies, isShort, inputQuery])

  //Менять переменную состояния, если не найдены фильмы
  useEffect(() => {
    if (isShort) {
      const filteredSavedMovies = filterByTitleMovies(props.savedMovies, inputQuery);
      const shortFilteredSavedMovies = filterShortMovies(filteredSavedMovies);
      setIsMoviesNotFound(shortFilteredSavedMovies.length === 0 && inputQuery !== '');
    } else {
      const filteredSavedMovies = filterByTitleMovies(props.savedMovies, inputQuery);
      setIsMoviesNotFound(filteredSavedMovies.length === 0 && inputQuery !== '');
    }
  }, [props.savedMovies, isShort, inputQuery])


  return (
    <>
      <div className='wrapper'>
        <Header
          isLoggedIn={props.isLoggedIn} />
        <main className='saved-movies'>
          <SearchForm
            onSearch={searchAmongSavedMovies}
            isShort={isShort}
            handleIsShort={handleShortMovies}
          />
          <MoviesCardList
            movies={filteredMovies}
            isMoviesNotFound={isMoviesNotFound}
            onLike={props.onLike}
            savedMovies={props.savedMovies}
            onDislike={props.onDislike}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;