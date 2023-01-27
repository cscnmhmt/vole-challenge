import React from 'react';
import '../Market/Modal.css';

const SellModal = ({ handleWantToBuy }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="relative flex max-h-[914px] w-[860px] flex-col items-center overflow-hidden overflow-y-auto rounded-base bg-sky-white shadow-sm">
          <button onClick={handleWantToBuy}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
