import React from 'react';
import leftArrowIcon from '/left-arrow-icon.svg';
import rightArrowIcon from '/right-arrow-icon.svg';

const Pagination = function () {
  return (
    <div>
      <div className="flex w-full justify-center gap-4 rounded-base bg-sky-lighter p-4">
        <div className="pagination">
          <button className="mr-5">
            <img src={leftArrowIcon} alt="" />
          </button>
          <button className="pagination-item--active">1</button>
          <button className="pagination-item">2</button>
          <button className="ml-5">
            <img src={rightArrowIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
