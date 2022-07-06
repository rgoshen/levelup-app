import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MoviesList />} />
        </Routes>
        <Routes>
          <Route path='details' element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
