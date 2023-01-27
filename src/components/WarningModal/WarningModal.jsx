import React from 'react';
import { createPortal } from 'react-dom';
import '../Market/Modal.css';

const WarningModal = ({ closeWarningModal }) => {
  return createPortal(
    <div className="modal z-50">
      <div className="modal-content">
        <div className="flex min-w-[400px] flex-col justify-between gap-7 rounded-base bg-sky-white px-5 py-6 shadow-sm">
          <h4 className="mt-3 text-center">You don't have enough money</h4>
          <div className="flex flex-col gap-2">
            <button className="btn-primary w-full" onClick={closeWarningModal}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default WarningModal;
