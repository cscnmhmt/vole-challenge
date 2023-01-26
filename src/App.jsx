import React, { useEffect, useState } from 'react';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import Header from './components/Header/Header';
import MyCards from './components/MyCards/MyCards';
import Market from './components/Market/Market';

function App() {
  const [cards, setCards] = useState('');
  const [myCards, setMyCards] = useState('');

  useEffect(() => {
    fetch('http://challenge.vole.io/cards/market')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://challenge.vole.io/cards/myCards')
      .then((res) => res.json())
      .then((data) => {
        setMyCards(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <MyCards myCards={myCards} />
      <Market cards={cards} />
    </div>
  );
}

export default App;
