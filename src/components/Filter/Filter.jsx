import css from './filter.module.css'

const Filter = ({ value, onChangeFilter }) => (
  <div className={css.filterWrapper}>
    <input className={css.inputFilter} type="text"
      name="filter"
      placeholder="Find contacts"
      value={value}
      onChange={onChangeFilter}
    />
  </div>  
  );

export default Filter;
