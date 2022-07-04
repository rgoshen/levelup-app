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
];

export function MoviesList() {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.name}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
