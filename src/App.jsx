import React from 'react';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import Header from './components/Header/Header';
import MyCards from './components/MyCards/MyCards';
import Market from './components/Market/Market';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <MyCards />
      <Market />
    </div>
  );
}

export default App;
