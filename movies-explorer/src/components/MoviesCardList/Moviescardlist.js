import { useLocation } from 'react-router-dom';
import './Moviescardlist.css';
import MoviesCard from '../MoviesCard/Moviescard.js'

function MoviesCardList() {

  const location = useLocation();

  return (
    <section className='movies-cardlist'>
      <ul className='movies-cardlist__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> 
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {location.pathname === '/movies' && <button type='button' className='movies-cardlist__button'>Еще</button>}
    </section>
  );
}

export default MoviesCardList;