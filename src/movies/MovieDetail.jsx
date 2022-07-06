import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = `?api_key=${process.env.REACT_APP_MOVIE_API}`;
const IMAGE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'original';
const POSTER_SIZE = 'w342';

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    try {
      const response = await fetch(`${BASE_URL}${id}${API_KEY}&language=en-US`);
      const newMovie = await response.json();
      setMovie(newMovie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie.title) return null;

  return (
    <div className='movie-detail'>
      <img
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + ' backdrop'}
        className='movie-detail-backdrop'
      />
      <div className='movie-detail-details'>
        <img
          src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + ' poster'}
          className='movie-detail-poster'
        />
        <div className='movie-detail-info'>
          <h1 className='movie-detail-title'>{movie.title}</h1>
          <p className='movie-detail-desc'>{movie.overview}</p>
          <p className='movie-detail-genres-list'>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
