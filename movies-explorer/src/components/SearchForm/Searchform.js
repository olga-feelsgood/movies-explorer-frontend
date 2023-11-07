import { useEffect, useState } from 'react';
import './Searchform.css';
import '../Section/Section.css';
import FilterCheckBox from '../FilterCheckBox/Filtercheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {

  const [searchQuery, setSearchQuery] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);
  const location = useLocation();

  const changeSearchQuery = (evt) => {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(searchQuery);
    console.log(emptySearch);
    if (searchQuery.length === 0) {
      setEmptySearch(true);
    } else {
      setEmptySearch(false);
      props.onSearch(searchQuery);
    }
  }

  //При изменениии чекбокса короткометражек заново фильтровать фильмы по запросу
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('allBeatMovies'));
    if (!movies) { return } else {
      props.onSearch(searchQuery);
    }
    }, [props.isShort])

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('moviesSearch')) {
      const searchInput = localStorage.getItem('moviesSearch');
      setSearchQuery(searchInput);
    }
  }, [location]);

  return (

    <div className='searchform section'>
      <form className='searchform__form' onSubmit={handleSubmit} name='searchform'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          type='text'
          value={searchQuery}
          onChange={changeSearchQuery}
        />
        <button className='searchform__button' type='submit'>Найти</button>
      </form>
      <span className={emptySearch ?'searchform__error': 'searchform__error searchform__error_hidden'}>Нужно ввести ключевое слово</span>
      <div className='searchform__container'>
        <FilterCheckBox
          isShort={props.isShort}
          handleIsShort={props.handleIsShort} />
      </div>
    </div>
  )
}

export default SearchForm;