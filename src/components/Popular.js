import React from 'react';
import { useState } from 'react';
import { displayAnimeGrid } from './utils';

const Popular = ({ mostPopular }) => {
  const [displayCount, setDisplayCount] = useState(4);
  const mostPopularAnime = displayAnimeGrid(
    mostPopular.slice(0, displayCount),
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
      <h2 className='popular-title'>Most Popular</h2>
      <div className='view-more'>
        <button className='view-more-link border-0' onClick={handleViewMore}>
          {displayCount === 4 ? 'View More' : 'View Less'}
        </button>
      </div>
      <div className='row mt-2'>{mostPopularAnime}</div>
    </div>
  );
};

export default Popular;
