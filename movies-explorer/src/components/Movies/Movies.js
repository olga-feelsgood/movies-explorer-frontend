import { useEffect, useState } from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
import Header from '../Header/Header.js';
import moviesApi from '../../utils/MoviesApi.js';
import { filterByTitleMovies, filterShortMovies } from '../../utils/utils';


function Movies(props) {

  const [beatMovies, setBeatMovies] = useState([]);//фильмы отфильтрованные по запросу
  const [isShort, setIsShort] = useState(false);//является ли короткометражкой
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);//состояние прелодера
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);//если не найдены фильмы по запросу
  const [filteredMovies, setFilteredMovies] = useState([]);//фильмы отфильтрованные по чекбоксу короткометражка

  // Отфильтровать фильмы по поисковому запросу + чекбоксу короткометражка,
  // сохранить все фильмы и фильтрованные в localStorage
  function handleFilterMovies(movies, isShort, searchQuery) {
    const filteredMovies = filterByTitleMovies(movies, searchQuery);
    setBeatMovies(filteredMovies);
    setFilteredMovies(isShort ? filterShortMovies(filteredMovies) : filteredMovies);
    localStorage.setItem('allBeatMovies', JSON.stringify(movies));
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }

  //Функция фильтрации короткометражек
  function handleShortMovies() {
    const newShortValue = !isShort;
    setIsShort(newShortValue);
    setFilteredMovies(newShortValue ? filterShortMovies(beatMovies) : beatMovies);
    localStorage.setItem('short', newShortValue);
  }

  //Получить фильмы от beatmovies и отфильтровать по запросу
  function getAndFilterBeatMovies(query) {
    localStorage.setItem('moviesSearch', query);//сохранить историю
    // localStorage.clear();
    const allBeatMovies = JSON.parse(localStorage.getItem('allBeatMovies'));
    if (allBeatMovies) {
      handleFilterMovies(allBeatMovies, isShort, query);
    } else {
      setIsMoviesLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          handleFilterMovies(movies, isShort, query);
        })
        .catch((err) => { console.log(err) })
        .finally(() => { setIsMoviesLoading(false) })
    }
  };

  //Изменять состояние чекбокса
  useEffect(() => {
    const short = localStorage.getItem('short') === 'true';
    setIsShort(short);
  }, [])

  //При изменениии чекбокса короткометражек заново фильтровать фильмы
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('allBeatMovies'));
    setBeatMovies(movies || []);
    setFilteredMovies(isShort ? filterShortMovies(movies) : movies || [])
  }, [isShort])

  //Менять переменную состояния, если не найдены фильмы
  useEffect(() => {
    setIsMoviesNotFound(filteredMovies.length === 0 && localStorage.getItem('moviesSearch'));
  }, [filteredMovies])

  return (
    <>
      <div className='wrapper'>
        <Header
          isLoggedIn={props.isLoggedIn} />
        <main className='movies'>
          <SearchForm
            onSearch={getAndFilterBeatMovies}
            isShort={isShort}
            handleIsShort={handleShortMovies}
          />
          {isMoviesLoading ? <Preloader /> :
            <MoviesCardList
              movies={filteredMovies}
              isMoviesNotFound={isMoviesNotFound}
              onLike={props.onLike}
              savedMovies={props.savedMovies}
              onDislike={props.onDislike}/>}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;