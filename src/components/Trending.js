import React from 'react';

const Trending = ({ trending }) => {
  const trendingAnime = trending.slice(0, 4).map(anime => {
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
      <h2 className='trending-title'>Trending</h2>
      <div className='view-more'>
        <a href='#trendingMore' className='view-more-link'>
          View More
        </a>
      </div>
      <div className='row mt-2'>{trendingAnime}</div>
    </div>
  );
};

export default Trending;
