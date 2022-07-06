import PropTypes from 'prop-types';
import './Filter.css';

export function Filter({ filter, setFilter }) {
  return (
    <label className='filter-label'>
      Filter:
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='filter-input'
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
