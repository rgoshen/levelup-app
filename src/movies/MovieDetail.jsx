import { useParams } from 'react-router-dom';

export function MovieDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie Detail{id}</h1>
    </div>
  );
}
