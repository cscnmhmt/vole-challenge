import React from 'react';
import leftArrowIcon from '/left-arrow-icon.svg';
import rightArrowIcon from '/right-arrow-icon.svg';

const Pagination = function ({
  cardPerPage,
  cardsLength,
  paginate,
  currentPage,
  increaseNumber,
  decreaseNumber,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(cardsLength / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex w-full justify-center gap-4 rounded-base bg-sky-lighter p-4">
        <div className="pagination">
          <button
            className={currentPage > 1 ? 'mr-5 opacity-100' : 'mr-5 opacity-0'}
            onClick={decreaseNumber}
          >
            <img src={leftArrowIcon} alt="" />
          </button>

          {pageNumbers.map((number) => (
            <button
              className={
                number === currentPage
                  ? 'pagination-item--active'
                  : 'pagination-item'
              }
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}

          <button
            className={
              currentPage < pageNumbers.length
                ? 'ml-5 opacity-100'
                : 'ml-5 opacity-0'
            }
            onClick={increaseNumber}
          >
            <img src={rightArrowIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
