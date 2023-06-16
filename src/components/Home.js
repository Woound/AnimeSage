import Header from './Header';
import Trending from './Trending';
import Popular from './Popular';

const Home = ({ sage, trending, mostPopular }) => {
  return (
    <div>
      <Header />
      <main>
        <div className='main-img-container'>
          <img
            className='main-img img-fluid'
            src={sage}
            alt='Main img of sage'
          />
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
};

export default Home;
