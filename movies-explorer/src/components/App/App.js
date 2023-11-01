import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/Savedmovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/Notfound.js';
import './App.css';
import { registerNewUser, loginUser, getContent } from '../../utils/Auth.js';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import mainApi from '../../utils/MainApi.js';

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    checkToken();
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    mainApi.updateTokenInHeaders();

    Promise.all([mainApi.getUserInfo(), mainApi.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        // setCards(cardsData)
      })
      .catch((err) => { console.log(err) })
  }, [isLoggedIn])




  //Регистрация пользователя
  function handleRegisterUser({ name, email, password }) {
    console.log({ name, email, password })
    registerNewUser({ name, email, password })
      .then(() => {
        console.log('вы зарегистрировались');
        handleLoginUser({ email, password });
        // handleSuccessInfotoolTipOpen();
      })
      .catch((err) => {
        // handleFailInfotoolTipOpen();
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
        // closeAllPopups();
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
          // navigate("/", { replace: true })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function signOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

console.log(`isLoggedIn ${isLoggedIn}`);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Routes>
          <Route path='/'
            element={<Main
              isLoggedIn={isLoggedIn} />} />
          <Route path='/movies'
            element={<Movies
              isLoggedIn={isLoggedIn} />} />
          <Route path='/saved-movies'
            element={<SavedMovies
              isLoggedIn={isLoggedIn} />} />
          <Route path='/profile'
            element={<Profile
              isLoggedIn={isLoggedIn}
              onUpdateUser={handleUpdateUser}
              message={message}
              onSignOut={signOut} />} />
          <Route path='/signup'
            element={!isLoggedIn? <Register
              onRegisterUser={handleRegisterUser}
              message={message} /> : <Navigate to='/movies'/>} />
          <Route path='/signin'
            element={!isLoggedIn? <Login
              onLoginUser={handleLoginUser}
              message={message} /> : <Navigate to='/movies'/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
