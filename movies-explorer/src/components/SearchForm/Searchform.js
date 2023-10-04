import './Searchform.css';
import '../Section/Section.css';
import FilterCheckBox from '../FilterCheckBox/Filtercheckbox';

function SearchForm() {
  return (
    <div className='searchform section'>
      <form className='searchform__form'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          required
          type='text'
          minLenght='1'
        />
        <button className='searchform__button' type='submit'>Найти</button>
      </form>
      <div className='searchform__container'>
        <FilterCheckBox />
        <p className='searchform__text'>Короткометражки</p>
      </div>
    </div>
  )
}

export default SearchForm;