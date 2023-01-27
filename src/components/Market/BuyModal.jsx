import React from 'react';
import { createPortal } from 'react-dom';
import '../Market/Modal.css';

const BuyModal = ({ clickedCard, handleBuy, buyModalClose }) => {
  return createPortal(
    <div className="modal z-50">
      <div className="modal-content">
        <div className="flex max-w-[400px] flex-col justify-between gap-4 rounded-base bg-sky-white px-5 py-6 pb-4 shadow-sm">
          <h4 className="text-center">
            Would you like to buy the card for{' '}
            <span className="text-red-base">
              € {clickedCard[0].price.toFixed(2)}
            </span>
          </h4>
          <div className="flex flex-col gap-2">
            <button
              className="btn-primary w-full"
              onClick={() => handleBuy(clickedCard[0].id)}
            >
              Buy
            </button>
            <button className="btn-light w-full" onClick={buyModalClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default BuyModal;
