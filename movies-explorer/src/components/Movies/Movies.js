import './Movies.css'
import SearchForm from '../SearchForm/Searchform.js';
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
import Header from '../Header/Header.js';

function Movies(props) {

  return (
    <>
      <div className='wrapper'>
        <Header />
        <main className='movies'>
          <SearchForm
            onSubmit={props.onSearch} />
          {props.isLoading ? <Preloader /> :
            <MoviesCardList />}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Movies;