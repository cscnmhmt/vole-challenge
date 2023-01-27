import React, { useState } from 'react';
import downArrowIcon from '/down-arrow-icon.svg';
import MultiRangeSlider from 'multi-range-slider-react';
import '../../style/range-slider.css';
import Pagination from './Pagination';
import Modal from './Modal';

const Market = function ({ cards, handleBuy }) {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('100');
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardDetail, setCardDetail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(10);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

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

  return (
    <div className="relative">
      <div className="mx-10 mb-[122px] flex flex-col gap-6 rounded-base bg-sky-lighter p-6 ">
        <h5 className="text-lg font-bold uppercase leading-7">Market</h5>
        <div className="flex items-start gap-6">
          {/* filter */}
          <div className="flex gap-4">
            <div className="flex min-w-[200px] flex-col rounded-base bg-sky-white px-6 py-2">
              <div className="border-b border-sky-light py-4">
                <button className="flex w-full items-center justify-between ">
                  <span className="text-base font-normal leading-6">
                    Card Type
                  </span>
                  <img src={downArrowIcon} alt="" />
                </button>
                <ul className="mt-4">
                  <li>
                    <input
                      type="radio"
                      name="Gold"
                      id="gold"
                      className="hidden"
                    />
                    <label
                      htmlFor="gold"
                      className="text-base leading-6 text-ink-light"
                    >
                      Gold (12)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="Gold"
                      id="gold"
                      className="hidden"
                    />
                    <label
                      htmlFor="gold"
                      className="text-base font-bold leading-6 text-red-base"
                    >
                      Silver (12)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="Gold"
                      id="gold"
                      className="hidden"
                    />
                    <label
                      htmlFor="gold"
                      className="text-base leading-6 text-ink-light"
                    >
                      Gold (12)
                    </label>
                  </li>
                </ul>
              </div>
              <div className="border-b border-sky-light py-4">
                <button className="flex w-full items-center justify-between ">
                  <span className="text-base font-normal leading-6">
                    Position
                  </span>
                  <img src={downArrowIcon} alt="" />
                </button>
                <ul className="mt-4">
                  <li>
                    <input
                      type="radio"
                      name="Goalkeeper"
                      id="goalkeeper"
                      className="hidden"
                    />
                    <label
                      htmlFor="goalkeeper"
                      className="text-base leading-6 text-ink-light"
                    >
                      Goalkeeper (4)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="Goalkeeper"
                      id="goalkeeper"
                      className="hidden"
                    />
                    <label
                      htmlFor="goalkeeper"
                      className="text-base leading-6 text-ink-light"
                    >
                      Goalkeeper (4)
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="Goalkeeper"
                      id="goalkeeper"
                      className="hidden"
                    />
                    <label
                      htmlFor="goalkeeper"
                      className="text-base leading-6 text-ink-light"
                    >
                      Goalkeeper (4)
                    </label>
                  </li>
                </ul>
              </div>
              <div className="py-4">
                <button className="flex w-full items-center justify-between">
                  <span className="text-base font-normal leading-6">Price</span>
                  <img src={downArrowIcon} alt="" />
                </button>
                <div className="mt-2">
                  <div className="range-slider">
                    <div className="flex items-center justify-between text-xs font-bold leading-3 text-red-base">
                      <span>€ {Number(minValue).toFixed(2)}</span>
                      <span>€ {Number(maxValue).toFixed(2)}</span>
                    </div>
                    <MultiRangeSlider
                      min={0}
                      max={100}
                      step={1}
                      minValue={minValue}
                      maxValue={maxValue}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                      label="false"
                      ruler="false"
                      barLeftColor="#e8282b"
                      barInnerColor="#e8282b"
                      barRightColor="#e8282b"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid  grid-cols-5 grid-rows-2 gap-6">
            {Array.isArray(currentCards)
              ? currentCards.map((card) => (
                  <div
                    href="#"
                    key={card.id}
                    className="flex h-[346px] w-[198px] cursor-pointer flex-col justify-between  rounded-base bg-sky-white  hover:shadow-lg"
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
                        onClick={() => handleBuy(card.id)}
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
            handleBuy={handleBuy}
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
      </div>
    </div>
  );
};

export default Market;
