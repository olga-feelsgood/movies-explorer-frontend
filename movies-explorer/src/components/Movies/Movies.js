import './Movies.css'
import SearchForm from "../SearchForm/Searchform.js";
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from "../Footer/Footer.js";


function Movies() {
  return (
    <>
      <main className="main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;