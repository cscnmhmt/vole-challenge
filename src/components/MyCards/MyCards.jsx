import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import SellModal from './SellModal';
import Pagination from './Pagination';
import FilterMyCards from './FilterMyCards';

const MyCards = function ({ myCards, handleSelling }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [myCardDetail, setMyCardDetail] = useState('');
  const [sellModal, setSellModal] = useState(false);
  const [clickedCard, setClickedCard] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(10);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentMyCards = myCards.slice(indexOfFirstCard, indexOfLastCard);

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

  const handleModal = (id) => {
    setModalOpen(true);
    document.body.style.overflowY = 'hidden';
    const clickedCard = myCards.filter((card) => card.id === id);
    setMyCardDetail(clickedCard);
  };
  const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    setModalOpen(false);
  };

  const handleSellModal = (id) => {
    setSellModal(true);
    setClickedCard(myCards.filter((card) => card.id === id));
  };

  const handleSell = (id) => {
    setSellModal(false);
    handleSelling(id);
  };

  return (
    <div className="relative">
      <div className="mx-10 my-[122px] flex flex-col gap-6 rounded-base bg-sky-lighter p-6 ">
        <h5 className="text-lg font-bold uppercase leading-7">My Cards</h5>
        <div className="flex items-start gap-6">
          <FilterMyCards myCards={myCards} />

          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {Array.isArray(currentMyCards)
              ? currentMyCards.map((card) => (
                  <div
                    href="#"
                    key={card.id}
                    className="flex h-[346px] w-[198px] cursor-pointer  flex-col justify-between  rounded-base bg-sky-white  hover:shadow-lg"
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
                        onClick={() => handleSellModal(card.id)}
                      >
                        Sell
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
            cardDetail={myCardDetail}
            handleSellModal={handleSellModal}
          />
        ) : (
          ''
        )}
        <Pagination
          myCards={myCards}
          cardPerPage={cardPerPage}
          cardsLength={myCards.length}
          paginate={paginate}
          currentPage={currentPage}
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        />
        {sellModal ? (
          <SellModal
            clickedCard={clickedCard}
            handleSell={handleSell}
            sellModalClose={() => setSellModal(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MyCards;
