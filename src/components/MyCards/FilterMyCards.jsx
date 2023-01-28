import React, { useEffect, useState } from 'react';
import downArrowIcon from '/down-arrow-icon.svg';
import MultiRangeSlider from 'multi-range-slider-react';
import '../../style/range-slider.css';

const FilterMyCards = ({ myCards }) => {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('100');

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="flex gap-4">
      <div className="flex min-w-[200px] flex-col rounded-base bg-sky-white px-6 py-2">
        <div className="border-b border-sky-light py-4">
          <button className="flex w-full items-center justify-between ">
            <span className="text-base font-normal leading-6">Card Type</span>
            <img src={downArrowIcon} alt="" />
          </button>
          <ul className="mt-4">
            {/* {Array.isArray(myCards)
              ? myCards.map((card) => (
                  <li key={card.id}>
                    <input
                      type="checkbox"
                      name={card.cardType}
                      id={card.cardType}
                      className="filter-checkbox hidden"
                      value={card.cardType}
                    />
                    <label
                      htmlFor={card.cardType}
                      className="cursor-pointer text-base leading-6 text-ink-light"
                    >
                      {card.cardType}
                    </label>
                  </li>
                ))
              : null} */}
          </ul>
        </div>
        <div className="border-b border-sky-light py-4">
          <button className="flex w-full items-center justify-between ">
            <span className="text-base font-normal leading-6">Position</span>
            <img src={downArrowIcon} alt="" />
          </button>
          <ul className="mt-4">
            {/* {Array.isArray(myCards)
              ? myCards.map((card) => (
                  <li key={card.id}>
                    <input
                      type="checkbox"
                      name={card.position}
                      id={card.position}
                      className=" hidden"
                      value={card.position}
                    />
                    <label
                      htmlFor={card.position}
                      className="cursor-pointer text-base leading-6 text-ink-light"
                    >
                      {card.position}
                    </label>
                  </li>
                ))
              : null} */}
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
                barLeftColor="#E3E5E5"
                barInnerColor="#e8282b"
                barRightColor="#E3E5E5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMyCards;
