import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=9c32f397fdb4d58982d492124e77250a';

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
  }, [id]);

  if (!movie.title) return null;

  return (
    <div>
      <h1 className='moviedetail-title'>{movie.title}</h1>
      <p className='moviedetail-desc'>{movie.overview}</p>
      <ul className='moviedetail-genres-list'>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
