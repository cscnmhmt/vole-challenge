import React, { useEffect, useState } from 'react';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import Header from './components/Header/Header';
import MyCards from './components/MyCards/MyCards';
import Market from './components/Market/Market';
import WarningModal from './components/WarningModal/WarningModal';
import uniq from 'lodash/uniq';
import _ from 'lodash';

function App() {
  const [balance, setBalance] = useState(100);
  const [cards, setCards] = useState('');
  const [myCards, setMyCards] = useState('');
  const [warningModal, setWarningModal] = useState('');

  const [cardTypesMyCards, setCardTypesMyCards] = useState(null);
  const [cardPositionsMyCards, setCardPositionsMyCards] = useState(null);

  const [cardTypesMarket, setCardTypesMarket] = useState(null);
  const [cardPositionsMarket, setCardPositionsMarket] = useState(null);

  useEffect(() => {
    fetch('http://challenge.vole.io/cards/market')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });

    fetch('http://challenge.vole.io/cards/myCards')
      .then((res) => res.json())
      .then((data) => {
        setMyCards(data);
      });
  }, []);

  // set card types and positions for my cards filtering
  useEffect(() => {
    const types = Array.isArray(myCards)
      ? myCards.map((card) => card.cardType)
      : null;
    setCardTypesMyCards(uniq(types));
    const positions = Array.isArray(myCards)
      ? myCards.map((card) => card.position)
      : null;
    setCardPositionsMyCards(uniq(positions));
  }, [myCards]);

  // set card types and positions for market filtering
  useEffect(() => {
    const types = Array.isArray(cards)
      ? cards.map((card) => card.cardType)
      : null;
    setCardTypesMarket(uniq(types));
    const positions = Array.isArray(cards)
      ? cards.map((card) => card.position)
      : null;
    setCardPositionsMarket(uniq(positions));
  }, [cards]);

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
        <MyCards
          myCards={myCards}
          handleSelling={handleSelling}
          cardTypesMyCards={cardTypesMyCards}
          cardPositionsMyCards={cardPositionsMyCards}
        />

        {warningModal ? (
          <WarningModal closeWarningModal={() => setWarningModal(false)} />
        ) : null}

        <Market
          cards={cards}
          handleBuying={handleBuying}
          cardTypesMarket={cardTypesMarket}
          cardPositionsMarket={cardPositionsMarket}
        />
      </div>
    </div>
  );
}

export default App;
