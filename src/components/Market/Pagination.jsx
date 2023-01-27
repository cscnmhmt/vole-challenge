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
          {currentPage > 1 ? (
            <button className="mr-5" onClick={decreaseNumber}>
              <img src={leftArrowIcon} alt="" />
            </button>
          ) : null}

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
          {currentPage < pageNumbers.length ? (
            <button className="ml-5" onClick={increaseNumber}>
              <img src={rightArrowIcon} alt="" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
