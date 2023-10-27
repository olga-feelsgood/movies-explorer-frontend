import { useState } from 'react';
import './Searchform.css';
import '../Section/Section.css';
import FilterCheckBox from '../FilterCheckBox/Filtercheckbox';

function SearchForm(props) {

const [searchQuery, setSearchQuery] = useState('');

  const changeSearchQuery = (evt) => {
   setSearchQuery(evt.target.value);
    console.log(searchQuery);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearch(searchQuery);

  }
  return (

    <div className='searchform section'>
      <form className='searchform__form' onSubmit={handleSubmit} name='searchform'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          required
          type='text'
          minLength='1'
          value={searchQuery}
          onChange={changeSearchQuery}
        />
        <button className='searchform__button' type='submit'>Найти</button>
      </form>
      <div className='searchform__container'>
        <FilterCheckBox
        isShort={props.isShort}
        handleIsShort = {props.handleIsShort}/>
      </div>
    </div>
  )
}

export default SearchForm;