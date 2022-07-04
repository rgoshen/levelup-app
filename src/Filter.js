import PropTypes from 'prop-types';

export function Filter({ filter, setFilter }) {
  return (
    <label>
      Filter:
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
