import { useState } from 'react';
import { displayAnimeGrid } from './utils';

const Trending = ({ trending }) => {
  const [displayCount, setDisplayCount] = useState(4);
  const trendingAnime = displayAnimeGrid(
    trending.slice(0, displayCount),
    'col-3'
  );

  const handleViewMore = () => {
    if (displayCount === 4) {
      setDisplayCount(8);
    } else {
      setDisplayCount(4);
    }
  };

  return (
    <div className='container'>
      <h2 className='trending-title'>Trending</h2>
      <div className='view-more'>
        <button className='view-more-link border-0' onClick={handleViewMore}>
          {displayCount === 4 ? 'View More' : 'View Less'}
        </button>
      </div>
      <div className='row mt-2'>{trendingAnime}</div>
    </div>
  );
};

export default Trending;
