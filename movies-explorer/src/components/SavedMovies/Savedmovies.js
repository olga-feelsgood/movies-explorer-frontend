import './Savedmovies.css'
import SearchForm from "../SearchForm/Searchform.js";
import MoviesCardList from '../MoviesCardList/Moviescardlist.js';
import Footer from "../Footer/Footer.js";


function SavedMovies() {
  return (
    <>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;