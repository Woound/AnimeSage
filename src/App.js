import 'bootstrap/dist/css/bootstrap.min.css';
import sage from './assets/sage img.png';
import Header from './components/Header';
import Trending from './components/Trending';
import Popular from './components/Popular';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [trending, setTrending] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    getTrendingAnime();
    getMostPopularAnime();
  }, []);

  const getTrendingAnime = () => {
    axios.get('https://kitsu.io/api/edge/trending/anime').then(response => {
      setTrending(response.data.data);
    });
  };

  const getMostPopularAnime = () => {
    axios
      .get('https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=4')
      .then(response => {
        setMostPopular(response.data.data);
      });
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='main-img-container'>
          <img className='main-img fade-in' src={sage} alt='Main img of sage' />
        </div>
      </main>
      <div className='trending-container'>
        <Trending trending={trending} />
      </div>
      <div className='popular-container'>
        <Popular mostPopular={mostPopular} />
      </div>
    </div>
  );
}

export default App;
