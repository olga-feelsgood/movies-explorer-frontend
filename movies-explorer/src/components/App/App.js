import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/Savedmovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/Notfound.js';
import './App.css';
import { registerNewUser, loginUser } from '../../utils/Auth.js';
import { useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Регистрация пользователя
  function handleRegisterUser({ name, email, password }) {
    console.log({ name, email, password })
    registerNewUser({ name, email, password })
      .then(() => {
        console.log('вы зарегистрировались');
        handleLoginUser({email, password});
        // handleSuccessInfotoolTipOpen();
      })
      .catch((err) => {
        // handleFailInfotoolTipOpen();
        console.log(err);
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
        console.log(err)
      })
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register onRegisterUser={handleRegisterUser} />} />
        <Route path='/signin' element={<Login onLoginUser={handleLoginUser}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
