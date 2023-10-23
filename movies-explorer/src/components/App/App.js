import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/Savedmovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/Notfound.js';
import './App.css';
import moviesApi from '../../utils/MoviesApi.js';


function App() {

  const [beatMovies, setBeatMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);//состояние прелодера

  //Получить и сохранить фильмы
  function getBeatMovies() {
    if (!beatMovies) { console.log('уже есть фильмы'); }
    else {
      setIsMoviesLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setBeatMovies(movies);
          localStorage.setItem('beatMovies', JSON.stringify(movies));
          console.log(movies);
        })
        .catch((err) => { console.log(err) })
        .finally(() => { setIsMoviesLoading(false) })
    }
  };

  // function getBeatMovies() {
  //     setIsMoviesLoading(true);
  //     moviesApi.getMovies()
  //       .then((movies) => {
  //         console.log(movies);
  //       })
  //       .catch((err) => { console.log(err) })
  //       .finally(() => { setIsMoviesLoading(false) })
  //   }


  // function getBeatMovies() {
  //     moviesApi.getMovies()
  //       .then((movies) => {
  //         // localStorage.setItem('beatMovies', JSON.stringify(movies));
  //         console.log(movies);
  //       })
  //       .catch((err) => { console.log(err) })
  //   };



  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={
          <Movies
            movies={beatMovies}
            isLoading={isMoviesLoading}
            onSearch={getBeatMovies} />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
