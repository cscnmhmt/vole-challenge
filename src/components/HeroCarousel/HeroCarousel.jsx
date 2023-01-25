import React from 'react';
import bronzeCardsImg from '/bronze-cards.png';
import silverCardsImg from '/silver-cards.png';
import goldCardsImg from '/gold-cards.png';
import leftArrowIcon from '/left-arrow-icon.svg';
import rightArrowIcon from '/right-arrow-icon.svg';
import ReactSwipe from 'react-swipe';
import './HeroCarousel.css';

const HeroCarousel = function () {
  let reactSwipeEl;
  return (
    <div className="relative">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div className="mb-[30px] flex items-center justify-between  px-[287px]">
          <div className="text-sky-white">
            <h1 className="text-left text-[72px] font-bold uppercase leading-[90px]">
              New
            </h1>
            <h2 className="uppercase">Bronze Cards</h2>
          </div>
          <div>
            <img src={bronzeCardsImg} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between px-[287px]">
          <div className="text-sky-white">
            <h1 className="text-left text-[72px] font-bold uppercase leading-[90px]">
              New
            </h1>
            <h2 className="uppercase">Silver Cards</h2>
          </div>
          <div>
            <img src={silverCardsImg} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between px-[287px]">
          <div className="text-sky-white">
            <h1 className="text-left text-[72px] font-bold uppercase leading-[90px]">
              New
            </h1>
            <h2 className="text-[56px] font-bold uppercase leading-[70px]">
              Gold Cards
            </h2>
          </div>
          <div>
            <img src={goldCardsImg} alt="" />
          </div>
        </div>
      </ReactSwipe>

      <div className="absolute bottom-[120px] left-[287px] flex items-center gap-4">
        <button
          className="h-[18px] w-[18px]"
          onClick={() => reactSwipeEl.prev()}
        >
          <img src={leftArrowIcon} alt="" />
        </button>

        <div className="pagination"></div>

        <button
          className="h-[18px] w-[18px]"
          onClick={() => reactSwipeEl.next()}
        >
          <img src={rightArrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
