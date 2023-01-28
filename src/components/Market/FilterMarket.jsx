import React, { useEffect, useState } from 'react';
import downArrowIcon from '/down-arrow-icon.svg';
import MultiRangeSlider from 'multi-range-slider-react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../style/range-slider.css';

const FilterMyCards = ({ cardTypesMarket, cardPositionsMarket }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="flex gap-4">
      <div className="flex min-w-[200px] flex-col rounded-base bg-sky-white px-6 py-2">
        <Accordion
          allowMultipleExpanded="true"
          allowZeroExpanded="true"
          className="border-0"
          preExpanded={[
            'type-filtering',
            'position-filtering',
            'price-filtering',
          ]}
        >
          <AccordionItem
            className="border-b border-sky-light py-4"
            uuid={'type-filtering'}
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <button className="flex w-full items-center justify-between ">
                  <span className="text-base font-normal leading-6">
                    Card Type
                  </span>
                  <img src={downArrowIcon} alt="" />
                </button>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="mt-4">
                {Array.isArray(cardTypesMarket)
                  ? cardTypesMarket.map((card, index) => (
                      <li key={index}>
                        <input
                          type="checkbox"
                          name={card}
                          id={card}
                          className="filter-checkbox hidden"
                          value={card}
                        />
                        <label
                          htmlFor={card}
                          className="cursor-pointer text-base leading-6 text-ink-light"
                        >
                          {card}
                        </label>
                      </li>
                    ))
                  : null}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem
            className="border-b border-sky-light py-4"
            uuid={'position-filtering'}
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <button className="flex w-full items-center justify-between ">
                  <span className="text-base font-normal leading-6">
                    Position
                  </span>
                  <img src={downArrowIcon} alt="" />
                </button>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="mt-4">
                {Array.isArray(cardPositionsMarket)
                  ? cardPositionsMarket.map((card, index) => (
                      <li key={index}>
                        <input
                          type="checkbox"
                          name={card}
                          id={card}
                          className="hidden"
                          value={card}
                        />
                        <label
                          htmlFor={card}
                          className="cursor-pointer text-base leading-6 text-ink-light"
                        >
                          {card}
                        </label>
                      </li>
                    ))
                  : null}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="py-4" uuid={'price-filtering'}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <button className="flex w-full items-center justify-between">
                  <span className="text-base font-normal leading-6">Price</span>
                  <img src={downArrowIcon} alt="" />
                </button>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="mt-2">
                <div className="range-slider">
                  <div className="flex items-center justify-between text-xs font-bold leading-3 text-red-base">
                    <span>€ {Number(minValue).toFixed(2)}</span>
                    <span>€ {Number(maxValue).toFixed(2)}</span>
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={30}
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
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FilterMyCards;
