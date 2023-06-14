import 'bootstrap/dist/css/bootstrap.min.css';
import sage from './assets/sage img.png';
import Header from './components/Header';
import Trending from './components/Trending';
import Popular from './components/Popular';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className='main-img-container'>
          <img className='main-img fade-in' src={sage} alt='Main img of sage' />
        </div>
      </main>
      <div className='trending-container'>
        <Trending />
      </div>
      <div className='popular-container'>
        <Popular />
      </div>
    </div>
  );
}

export default App;
