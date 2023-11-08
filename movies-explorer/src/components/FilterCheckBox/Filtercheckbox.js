import './Filtercheckbox.css';

function FilterCheckBox(props) {
  return (
    <>
      <input onChange={props.handleIsShort} checked={props.isShort} type="checkbox" className="filter-checkbox" id="filter-checkbox_short-movie" />
      <label htmlFor="filter-checkbox_short-movie">Короткометражки</label>
    </>
  )
}

export default FilterCheckBox;