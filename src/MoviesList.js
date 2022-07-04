import { useState } from 'react';

const movies = [
  {
    name: '36th Chamber',
  },
  {
    name: 'Man of Iron',
  },
  {
    name: '5 Deadly Venoms',
  },
  {
    name: 'Iron Man',
  },
];

export function MoviesList() {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <label>
        Filter:
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </label>
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <li key={movie.name}>{movie.name}</li>
          ))}
      </ul>
    </div>
  );
}
