import { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

// const movies = [
//   {
//     name: '36th Chamber',
//   },
//   {
//     name: 'Man of Iron',
//   },
//   {
//     name: '5 Deadly Venoms',
//   },
//   {
//     name: 'Iron Man',
//   },
// ];

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=9c32f397fdb4d58982d492124e77250a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

export function MoviesList() {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      setMovies(movies.results);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
