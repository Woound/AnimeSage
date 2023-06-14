import React from 'react';

const Popular = () => {
  return (
    <div className='container'>
      <h2 className='popular-title'>Popular</h2>
      <div className='view-more'>
        <a href='#popularMore' className='view-more-link'>
          View More
        </a>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <div className='placeholder-image'></div>
          <div className='placeholder-title text-white'>Title 1</div>
        </div>
        <div className='col'>
          <div className='placeholder-image'></div>
          <div className='placeholder-title text-white'>Title 2</div>
        </div>
        <div className='col'>
          <div className='placeholder-image'></div>
          <div className='placeholder-title text-white'>Title 3</div>
        </div>
        <div className='col'>
          <div className='placeholder-image'></div>
          <div className='placeholder-title text-white'>Title 4</div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
