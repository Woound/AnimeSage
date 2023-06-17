import { Link } from 'react-router-dom';

// Utility functions stored here following the DRY principle.

export function displayAnimeGrid(animeList, displaySettings) {
  return animeList.map(anime => {
    return (
      <div key={anime.id} className={displaySettings}>
        <div className='placeholder-image'>
          <Link to={`/anime/${anime.id}`} state={{ animeData: anime }}>
            <img
              className='img-fluid img-thumbnail'
              src={anime.attributes.posterImage.small}
              alt='Anime poster'
            />
          </Link>
        </div>
        <div className='placeholder-title text-white'>
          {anime.attributes.canonicalTitle}
        </div>
      </div>
    );
  });
}
