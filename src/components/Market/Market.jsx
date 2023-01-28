import React, { useEffect, useState } from 'react';
import downArrowIcon from '/down-arrow-icon.svg';
import MultiRangeSlider from 'multi-range-slider-react';
import '../../style/range-slider.css';
import Pagination from './Pagination';
import Modal from './Modal';
import BuyModal from './BuyModal';
import FilterMarket from './FilterMarket';

const Market = function ({ cards, handleBuying }) {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('30');
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardDetail, setCardDetail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(10);
  const [buyModal, setBuyModal] = useState(false);
  const [clickedCard, setClickedCard] = useState('');

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  let currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const cardTypes = ['Gold', 'Silver', 'Bronze'];

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const increaseNumber = () => {
    setCurrentPage(
      (prevCurrentPage) => (prevCurrentPage = prevCurrentPage + 1)
    );
  };
  const decreaseNumber = () => {
    setCurrentPage(
      (prevCurrentPage) => (prevCurrentPage = prevCurrentPage - 1)
    );
  };

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  useEffect(() => {
    const filteredCards = [...cards].filter(
      (card) => card.price <= maxValue && card.price >= minValue
    );
    currentCards = filteredCards;
    console.log(currentCards);
  }, [minValue, maxValue]);

  const handleModal = (id) => {
    setModalOpen(true);
    document.body.style.overflowY = 'hidden';
    const clickedCard = cards.filter((card) => card.id === id);
    setCardDetail(clickedCard);
  };
  const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    setModalOpen(false);
  };

  const handleBuyModal = (id) => {
    setBuyModal(true);
    setClickedCard(cards.filter((card) => card.id === id));
  };

  const handleBuy = (id) => {
    setBuyModal(false);
    handleBuying(id);
  };

  return (
    <div className="relative">
      <div className="mx-10 mb-[122px] flex flex-col gap-6 rounded-base bg-sky-lighter p-6 ">
        <h5 className="text-lg font-bold uppercase leading-7">Market</h5>
        <div className="flex items-start gap-6">
          {/* filter */}
          <FilterMarket cards={cards} />
          <div className="grid  grid-cols-5 grid-rows-2 gap-6">
            {Array.isArray(currentCards)
              ? currentCards.map((card) => (
                  <div
                    href="#"
                    key={card.id}
                    className="flex h-[346px] w-[198px] cursor-pointer flex-col justify-between rounded-base  bg-sky-white shadow-sm  hover:shadow-lg"
                  >
                    <div onClick={() => handleModal(card.id)}>
                      <img src={card.photoUrl} className="w-full" alt="" />
                    </div>
                    <div className="flex items-center justify-center gap-4 px-4 pb-5">
                      <span className="text-base font-bold leading-6">
                        € {Number(card.price).toFixed(2)}
                      </span>
                      <button
                        className="btn-secondary"
                        onClick={() => handleBuyModal(card.id)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                ))
              : ''}
          </div>
        </div>
        {isModalOpen ? (
          <Modal
            handleModalClose={closeModal}
            cardDetail={cardDetail}
            handleBuyModal={handleBuyModal}
          />
        ) : (
          ''
        )}
        <Pagination
          cards={cards}
          cardPerPage={cardPerPage}
          cardsLength={cards.length}
          paginate={paginate}
          currentPage={currentPage}
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        />
        {buyModal ? (
          <BuyModal
            clickedCard={clickedCard}
            handleBuy={handleBuy}
            buyModalClose={() => setBuyModal(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Market;
