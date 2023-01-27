import React from 'react';
import '../Market/Modal.css';

const SellModal = ({ clickedCard, handleSell, sellModalClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex max-w-[400px] flex-col justify-between gap-4 rounded-base bg-sky-white px-5 py-6 pb-4 shadow-sm">
          <h4 className="text-center">
            Would you like to sell the card for{' '}
            <span className="text-red-base">
              € {clickedCard[0].price.toFixed(2)}
            </span>
          </h4>
          <div className="flex flex-col gap-2">
            <button
              className="btn-primary w-full"
              onClick={() => handleSell(clickedCard[0].id)}
            >
              Sell
            </button>
            <button className="btn-light w-full" onClick={sellModalClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
