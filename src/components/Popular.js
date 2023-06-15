import React from 'react';

const Popular = ({ mostPopular }) => {
  const mostPopularAnime = mostPopular.map(anime => {
    return (
      <div key={anime.id} className='col'>
        <div className='placeholder-image'>
          <img
            className='img-fluid img-thumbnail'
            src={anime.attributes.posterImage.small}
            alt='Anime poster'
          ></img>
        </div>
        <div className='placeholder-title text-white'>
          {anime.attributes.canonicalTitle}
        </div>
      </div>
    );
  });

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
