import { useEffect, useState } from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
import Header from '../Header/Header.js';
import moviesApi from '../../utils/MoviesApi.js';
import { filterMovies } from '../../utils/utils';


function Movies(props) {

  const [beatMovies, setBeatMovies] = useState([]);//наличие загруженных с beat фильмов
  const [isShort, setIsShort] = useState(false);//является ли короткометражкой
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);//состояние прелодера
  const [isFound, setIsFound] = useState(false);//если ничего не найдено

  // Отфильтровать фильмы по поисковому запросу + чекбоксу короткометражка,
  // сохранить все фильмы и фильтрованные в localStorage
  function handleFilterMovies(movies, isShort, searchQuery) {
    const filteredMovies = filterMovies(movies, isShort, searchQuery);
    console.log(filteredMovies);
    setBeatMovies(filteredMovies);
    localStorage.setItem('allBeatMovies', JSON.stringify(movies));
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    console.log(beatMovies);
  }

  //Получить фильмы от beatmovies и отфильтровать по запросу
  function getAndFilterBeatMovies(query) {
    localStorage.setItem('moviesSearch', query);//сохранить историю
    const allBeatMovies = JSON.parse(localStorage.getItem('allBeatMovies'));
    console.log(allBeatMovies);
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

  //Менять isShort для чекбокса
  function handleIsShort() {
    const shortMovie = !isShort;
    setIsShort(shortMovie);
    localStorage.setItem('shortMovies', JSON.stringify(shortMovie));
  }

  return (
    <>
      <div className='wrapper'>
        <Header />
        <main className='movies'>
          <SearchForm
            onSearch={getAndFilterBeatMovies}
            isShort={isShort}
            handleIsShort={handleIsShort}
          />
          {props.isLoading ? <Preloader /> :
            <MoviesCardList
              movies={beatMovies} />}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;