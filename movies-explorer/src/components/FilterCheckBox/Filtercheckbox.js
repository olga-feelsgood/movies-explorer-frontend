import './Filtercheckbox.css';

function FilterCheckBox() {
  return (
    <>
      <input type="checkbox" className="filter-checkbox" id="filter-checkbox_short-movie" />
      <label htmlFor="filter-checkbox_short-movie">Короткометражки</label>
    </>
  )
}

export default FilterCheckBox;