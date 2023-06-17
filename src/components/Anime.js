import Header from './Header';
import { useLocation } from 'react-router-dom';

const Anime = () => {
  const location = useLocation();
  const { animeData } = location.state;
  return (
    <div>
      <Header />
      <h1 className='text-white text-center mt-5'>
        {animeData.attributes.titles.en_jp}
      </h1>
      <h2 className='text-white text-center mt-5 fs-3'>
        {animeData.attributes.titles.en}
      </h2>
      <section className='info-container'>
        <div className='poster-container'>
          <img
            src={animeData.attributes.posterImage.medium}
            className='img-fluid'
            alt='Poster img of anime'
          ></img>
          <div className='synopsis-container'>
            <p className='anime-synopsis text-white'>
              {animeData.attributes.synopsis}
            </p>
          </div>
        </div>
        <div className='box text-white anime-info d-flex justify-content-center align-items-center'>
          <span className='bg-transparent m-3'>
            <strong>Status:</strong> {animeData.attributes.status}
          </span>
          <span className='bg-transparent m-3'>
            <strong>Start Date:</strong> {animeData.attributes.startDate}
          </span>
          <span className='bg-transparent m-3'>
            <strong>Rating:</strong> {animeData.attributes.averageRating}
          </span>
          <span className='bg-transparent m-3'>
            <strong>Ranking:</strong> {animeData.attributes.popularityRank}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Anime;
