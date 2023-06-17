import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import sage from './assets/sage img.png';
import Home from './components/Home';
import Search from './components/Search';
import Anime from './components/Anime';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [trending, setTrending] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  // Fetching the required data only on the first render of the components.
  useEffect(() => {
    getTrendingAnime();
    getMostPopularAnime();
  }, []);

  // Fetching trending anime from the API, and using the useSate hook to pass the values on.
  const getTrendingAnime = () => {
    axios.get('https://kitsu.io/api/edge/trending/anime').then(response => {
      setTrending(response.data.data);
    });
  };

  // Fetching popular anime from the API, with pagination.
  const getMostPopularAnime = () => {
    axios
      .get('https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=4')
      .then(response => {
        setMostPopular(response.data.data);
      });
  };

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home sage={sage} trending={trending} mostPopular={mostPopular} />
            }
          />
          <Route path='/Search' element={<Search />} />
          <Route path='/anime/:id' element={<Anime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
