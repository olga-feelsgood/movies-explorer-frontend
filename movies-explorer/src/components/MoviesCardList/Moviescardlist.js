import { useLocation } from 'react-router-dom';
import './Moviescardlist.css';
import MoviesCard from '../MoviesCard/Moviescard.js'

function MoviesCardList(props) {

  const location = useLocation();


  return (
    <section className='movies-cardlist'>
      <ul className='movies-cardlist__list'>
        { props.movies.map(movie =><MoviesCard movie={movie} />)}
      </ul>
      {location.pathname === '/movies' && <button type='button' className='movies-cardlist__button'>Еще</button>}
    </section>
  );
}

export default MoviesCardList;