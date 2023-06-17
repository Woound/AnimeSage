import React from 'react';
import { displayAnimeGrid } from './utils';

const Popular = ({ mostPopular }) => {
  const mostPopularAnime = displayAnimeGrid(mostPopular, 'col-3');

  return (
    <div className='container'>
      <h2 className='popular-title'>Most Popular</h2>
      <div className='view-more'>
        <a href='#popularMore' className='view-more-link'>
          View More
        </a>
      </div>
      <div className='row mt-2'>{mostPopularAnime}</div>
    </div>
  );
};

export default Popular;
