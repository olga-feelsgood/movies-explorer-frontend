import './Movies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';

function Movies() {
  return (
    <>
      <main className='movies'>
        <SearchForm />
        <Preloader />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;