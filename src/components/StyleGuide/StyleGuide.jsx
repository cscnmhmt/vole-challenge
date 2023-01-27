import React, { useState } from 'react';
import closeIcon from '/close-icon.svg';
import leftArrowIcon from '/left-arrow-icon.svg';
import rightArrowIcon from '/right-arrow-icon.svg';
import downArrowIcon from '/down-arrow-icon.svg';
import walletIcon from '/wallet-icon.svg';
import MultiRangeSlider from 'multi-range-slider-react';

import '../../style/range-slider.css';

function StyleGuide() {
  const [minValue, setMinValue] = useState('0');
  const [maxValue, setMaxValue] = useState('100');

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="flex flex-col gap-3 bg-ink-darker p-10">
      {/* buttons */}
      <div className="flex gap-4 rounded-base bg-sky-lighter p-4">
        <h2>Buttons</h2>
        <button className="close-btn">
          <img src={closeIcon} className="icon" alt="close icon" />
        </button>
        <button className="btn-primary">Sell</button>
        <button className="btn-secondary">Sell</button>
        <button className="btn-light">Cancel</button>
      </div>
      {/* pagination */}
      <div className="flex gap-4 rounded-base bg-sky-lighter p-4">
        <h2>Pagination</h2>
        <div className="pagination">
          <button>
            <img src={leftArrowIcon} alt="" />
          </button>
          <button className="pagination-item--active">1</button>
          <button className="pagination-item">2</button>
          <button>
            <img src={rightArrowIcon} alt="" />
          </button>
        </div>
      </div>
      {/* ******* */}
      <div className="flex items-start gap-10 rounded-base bg-sky-lighter p-4">
        {/* player card */}
        <div className="flex gap-4">
          <h2>Player card</h2>
          <div className="flex h-[346px] w-[198px] flex-col justify-between  rounded-base bg-sky-white shadow-sm ">
            <img src={playerPhoto} className="w-full" alt="" />
            <div className="flex items-center justify-center gap-4 px-4 pb-5">
              <span className="text-base font-bold leading-6">€ 20.00</span>
              <button className="btn-secondary">Sell</button>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className="flex gap-4">
          <h2>Filter</h2>
          <div className="flex min-w-[200px] flex-col rounded-base bg-sky-white px-6 py-2 shadow-sm">
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
        {/* wallet */}
        <div className="flex overflow-hidden rounded-base ">
          <div className="flex items-center bg-red-base p-3">
            <img src={walletIcon} alt="" />
          </div>
          <div className="flex items-center bg-ink-dark py-3 px-5 text-xl font-bold text-sky-white">
            € 100.00
          </div>
        </div>
      </div>
      {/* modals */}
      <div className="flex items-start gap-4 rounded-base bg-sky-lighter p-4">
        <h2>Modals</h2>
        {/* modal 1 */}
        <div className="flex max-w-[400px] flex-col justify-between gap-4 rounded-base bg-sky-white px-5 py-6 pb-4 shadow-sm">
          <h4 className="text-center">
            Would you like to buy the card for{' '}
            <span className="text-red-base">€ 30.00</span>
          </h4>
          <div className="flex flex-col gap-2">
            <button className="btn-primary w-full">Buy</button>
            <button className="btn-light w-full">Cancel</button>
          </div>
        </div>
        {/* modal 2 */}
        <div className="flex min-w-[400px] flex-col justify-between gap-7 rounded-base bg-sky-white px-5 py-6 shadow-sm">
          <h4 className="mt-3 text-center">You don't have enough money</h4>
          <div className="flex flex-col gap-2">
            <button className="btn-primary w-full">Back</button>
          </div>
        </div>
      </div>

      {/* player edit */}
      <div className="flex gap-4 rounded-base bg-sky-lighter p-4">
        <h2>Player detail</h2>
        <div className="relative flex max-h-[914px] w-[860px] flex-col items-center overflow-hidden rounded-base bg-sky-white shadow-sm">
          {/* banner */}
          <div className="flex h-[382px] w-full items-center justify-center bg-sky-light">
            <img src={playerPhoto} alt="" />
          </div>
          {/* close icon */}
          <button className="close-btn absolute right-6 top-6 z-50">
            <img src={closeIcon} alt="" />
          </button>
          {/* top */}
          <div className="flex w-full flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="uppercase text-red-base">Kim min jae</h4>
                <p className="text-lg font-normal">Defender</p>
              </div>
              <div className="flex w-1/2 items-center justify-between rounded-base bg-sky-lighter p-6">
                <h4>€ 20.00</h4>
                <button className="btn-primary">Sell</button>
              </div>
            </div>
            {/* middle */}
            <div className="flex flex-col justify-between gap-4 rounded-base bg-sky-lighter p-6">
              <h5 className="text-lg font-bold uppercase leading-7">
                Attributes
              </h5>
              <ul className="flex justify-between gap-4">
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
                <li className="w-1/6 rounded-base bg-sky-white p-4">
                  <p className="text-lg leading-7">Pace</p>
                  <div className="flex items-baseline">
                    <h4>77</h4>
                    <p className="text-lg leading-7 text-sky-darker">/100</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* bottom */}
            <div className="flex items-center justify-between gap-6">
              <div className="w-1/2 rounded-base bg-sky-lighter p-6">
                <p className="text-lg font-normal leading-7">Team</p>
                <p className="text-xl font-bold leading-8">Trabzonspor</p>
              </div>
              <div className="w-1/2 rounded-base bg-sky-lighter p-6">
                <p className="text-lg font-normal leading-7">Card Type</p>
                <p className="text-xl font-bold leading-8">Silver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleGuide;
