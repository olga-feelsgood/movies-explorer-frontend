import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/Savedmovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/Notfound.js';
import InfoTooltip from '../Infotooltip/InfoTooltip.js';
import ProtectedRoute from '../../utils/ProtectedRoute.js';
import { registerNewUser, loginUser, getContent } from '../../utils/Auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState([]);//ошибки от сервера

  const [currentUser, setCurrentUser] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);//сохраненные фильмы

  const [infotoolTipOpen, setInfotoolTipOpen] = useState(false);//открыть/закрыть popup
  const [infoMessage, setInfoMessage] = useState('');//текст для popup
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);//сообщение об ошибке или успехе

  const [windowSize, setWindowSize] = useState(window.innerWidth);//ширина окна

//отследить ширину окна
const handleResize = debounce(() => {
  setWindowSize(window.innerWidth);
}, 1000);

//установить слушатель событий на ширину окна
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
},[handleResize])

  useEffect(() => {
    checkToken();
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    mainApi.updateTokenInHeaders();

    Promise.all([mainApi.getUserInfo(), mainApi.getInitialMovies()])
      .then(([userData, initialMovies]) => {
        setCurrentUser(userData);
        setSavedMovies(initialMovies);
      })
      .catch((err) => { console.log(err) })
  }, [isLoggedIn, navigate])

  //Регистрация пользователя
  function handleRegisterUser({ name, email, password }) {
    console.log({ name, email, password })
    registerNewUser({ name, email, password })
      .then(() => {
        handleLoginUser({ email, password });
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Что-то пошло не так: 409') {
          const errormessage = 'Пользователь с таким email уже существует'
          setMessage(errormessage);
        } else {
          const errormessage = 'При регистрации пользователя произошла ошибка'
          setMessage(errormessage)
        }
      })
  }

  //Авторизация пользователя
  function handleLoginUser({ email, password }) {
    loginUser({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        if (err === 'Что-то пошло не так: 401') {
          const errorMessage = 'Вы ввели неправильный логин или пароль'
          setMessage(errorMessage);
        } else {
          const errorMessage = 'При авторизации произошла ошибка'
          setMessage(errorMessage)
        }
      })
  }

  //Обновление информации о пользователе
  function handleUpdateUser({ name, email }) {
    mainApi.setUserInfo({ name, email })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setInfotoolTipOpen(true);
        setIsSuccessMessage(true);
        setInfoMessage('Данные пользователя успешно изменены')
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Что-то пошло не так: 409') {
          const errorMessage = 'Пользователь с таким email уже существует'
          setMessage(errorMessage);
        } else {
          const errorMessage = 'При обновлении профиля произошла ошибка'
          setMessage(errorMessage)
        }
      })
  }

  function checkToken() {
    const token = localStorage.getItem('token')
    if (token) {
      getContent(token)
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function handleMovieLike(movie) {
    mainApi.createMovie({
      country: movie.country,
      director: movie.director,
      duration: String(movie.duration),
      year: movie.year,
      description: movie.description,
      image: moviesApi._url + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: moviesApi._url + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((newMovie) => {
        console.log(newMovie);
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((err) => { console.log(err) })
  }

  function handleMovieDislike(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => { if (!(c._id === movie._id)) { return c } })
        )
      })
      .catch((err) => { console.log(err) })
  }

  function signOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  function closePopup() {
    setInfotoolTipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Routes>
          <Route path='/'
            element={<Main
              isLoggedIn={isLoggedIn} />} />
          <Route path='/movies'
            element={<ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              onLike={handleMovieLike}
              onDislike={handleMovieDislike}
              savedMovies={savedMovies}
              setInfotoolTipOpen={setInfotoolTipOpen}
              setIsSuccessMessage={setIsSuccessMessage}
              setInfoMessage={setInfoMessage} />} />
          <Route path='/saved-movies'
            element={<ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              onLike={handleMovieLike}
              onDislike={handleMovieDislike}
              savedMovies={savedMovies} />} />
          <Route path='/profile'
            element={<ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              onUpdateUser={handleUpdateUser}
              message={message}
              setMessage={setMessage} 
              onSignOut={signOut} />} />
          <Route path='/signup'
            element={!isLoggedIn ? <Register
              onRegisterUser={handleRegisterUser}
              message={message}
              setMessage={setMessage} /> : <Navigate to='/movies' />} />
          <Route path='/signin'
            element={!isLoggedIn ? <Login
              onLoginUser={handleLoginUser}
              message={message}
              setMessage={setMessage} /> : <Navigate to='/movies' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={infotoolTipOpen}
          isSuccess={isSuccessMessage}
          message={infoMessage}
          onClose={closePopup}
        />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
