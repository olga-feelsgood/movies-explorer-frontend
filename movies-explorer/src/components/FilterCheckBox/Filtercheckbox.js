import './Filtercheckbox.css';

function FilterCheckBox() {
  return (
    <label className='filter-checkbox'>
      <input type='checkbox' className='filter-checkbox__input' />
      <span className='filter-checkbox__slider' />
    </label>)
}

export default FilterCheckBox;