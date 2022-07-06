import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

const POSTER_SIZE = 'original';

export function Movie({ movie, config }) {
  return (
    <li>
      <Link to={`movie/${movie.id}`}>
        {config.images.base_url && (
          <img
            src={config.images?.base_url + POSTER_SIZE + movie.poster_path}
            alt={movie.title + ' Poster'}
            className='movie-poster'
          />
        )}
      </Link>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    }),
  }),
};
