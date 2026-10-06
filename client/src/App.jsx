import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Listing_Header from './components/Product Listing/Listing_Header';

function App() {
  return (
    <div className='w-full min-h-screen bg-[#FFF9F2]'>
      <Navbar />
      <Listing_Header />
    </div>

  );
}

export default App;
