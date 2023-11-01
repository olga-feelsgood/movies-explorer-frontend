import './Savedmovies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';


function SavedMovies(props) {
  return (
    <>
      <div className='wrapper'>
        <Header
          isLoggedIn={props.isLoggedIn} />
        <main className='saved-movies'>
          <SearchForm />
          <MoviesCardList />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;