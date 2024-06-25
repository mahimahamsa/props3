import React from 'react';
import Header from './components/Header';
import Imagedata from './components/Imagedata';
import GallaryFooter from './components/GallaryFooter';

function App() {
  const imageData = Imagedata();

  return (
    <div>
      <Header />
      <div>
        {imageData.map(image => (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        ))}
      </div>
      <GallaryFooter />
    </div>
  );
}

export default App;

