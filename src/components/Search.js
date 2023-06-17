import axios from 'axios';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { displayAnimeGrid } from './utils';
import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queryData, setQueryData] = useState([]);

  // Takes in input and updates the value in the search box.
  const handleQueryChange = event => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Retrieving and storing data matching the query from the API.
  const searchAnime = event => {
    event.preventDefault();
    const encodedSearchQuery = encodeURIComponent(searchQuery); // Convert a string into a URL encoded format.
    axios
      .get(
        `https://kitsu.io/api/edge/anime?filter[text]=${encodedSearchQuery}&page[limit]=12`
      )
      .then(response => {
        setQueryData(response.data.data);
      })
      .catch(error => {
        console.log('An error occurred', error.message);
      });
  };

  // Displays the data returned from the API into a grid system.
  const displayAnime = displayAnimeGrid(queryData, 'col-4 mb-5');

  return (
    <div>
      <Header />
      <section className='mt-5 search-container'>
        <div className='d-flex justify-content-center'>
          <h1 className='text-white fw-bold d-flex search-heading'>
            Ask and you shall receive
          </h1>
        </div>
        <div className='search-box'>
          <form onSubmit={searchAnime} className='d-flex align-items-center'>
            <input
              value={searchQuery}
              type='text'
              className='input'
              placeholder='Search'
              onChange={handleQueryChange}
            />
            <Button type='submit' className='input w-25'>
              Search
            </Button>
          </form>
        </div>
      </section>
      <div className='container query-result-container'>
        <div className='row'>{displayAnime}</div>
      </div>
    </div>
  );
};

export default Search;
