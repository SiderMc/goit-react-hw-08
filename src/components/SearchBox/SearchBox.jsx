import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors';
import { filterContacts } from '../../redux/filters/slice';

export default function SearchBox() {
  const id = useId();
  const filterSelector = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleFilter = event => {
    return dispatch(filterContacts(event.target.value));
  };
  return (
    <div className={css.search}>
      <label htmlFor={`${id}-search`} className={css.label}>
      </label>
      <input
        type="text"
        className={css.input}
        id={`${id}-search`}
        value={filterSelector}
        onChange={handleFilter}
        placeholder='Find contacts by name'
      />
    </div>
  );
}
