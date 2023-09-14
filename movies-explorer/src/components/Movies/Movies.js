import './Movies.css'
import SearchForm from "../SearchForm/Searchform";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <main className="main">
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;