import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/Savedmovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/Notfound.js';
import Header from '../Header/Header.js';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
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
