import React, { useEffect, useState } from 'react';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import Header from './components/Header/Header';
import MyCards from './components/MyCards/MyCards';
import Market from './components/Market/Market';
import WarningModal from './components/WarningModal';

function App() {
  const [balance, setBalance] = useState(100);
  const [cards, setCards] = useState('');
  const [myCards, setMyCards] = useState('');
  const [warningModal, setWarningModal] = useState('');

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

  const handleSelling = (id) => {
    const selledCard = myCards.filter((card) => card.id === id);
    setCards([...cards, ...selledCard]);
    setMyCards(myCards.filter((card) => card.id !== id));
    setBalance((currentBalance) => currentBalance + selledCard[0].price);
  };

  const handleBuying = (id) => {
    const boughtCard = cards.filter((card) => card.id === id);
    // if bought card price bigger than current balance then show alert
    if (boughtCard[0].price > balance) {
      setWarningModal(true);
      return;
    }
    setMyCards([...myCards, ...boughtCard]);
    setCards(cards.filter((card) => card.id !== id));
    setBalance((currentBalance) => currentBalance - boughtCard[0].price);
  };

  return (
    <div className="App">
      <Header balance={balance} />
      <HeroCarousel />

      <div className="container">
        <MyCards myCards={myCards} handleSelling={handleSelling} />

        {warningModal ? (
          <WarningModal closeWarningModal={() => setWarningModal(false)} />
        ) : null}

        <Market cards={cards} handleBuying={handleBuying} />
      </div>
    </div>
  );
}

export default App;
