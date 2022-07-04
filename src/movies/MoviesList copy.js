import { useState, useRef } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

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
  const ulRef = useRef(null);
  const ref = useRef(null);

  console.log('ulRef', ulRef);

  return (
    <div ref={ulRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(ref.current.value);
        }}
      >
        <input ref={ref} />
        <button>Submit</button>
      </form>
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
