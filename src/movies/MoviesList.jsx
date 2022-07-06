import { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';
import './MoviesList.css';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=9c32f397fdb4d58982d492124e77250a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=9c32f397fdb4d58982d492124e77250a`;

export function MoviesList() {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getConfig = async () => {
    try {
      const response = await fetch(CONFIG_URL);
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className='movies-list'>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} movie={movie} config={config} />
          ))}
      </ul>
    </div>
  );
}
