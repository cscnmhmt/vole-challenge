import React from 'react';
import logo from '/logo.svg';
import walletIcon from '/wallet-icon.svg';
import './Header.css';

const Header = function ({ balance }) {
  return (
    <div className="sticky top-0 z-50">
      <header className="flex h-[122px] items-center  justify-between bg-ink-darkest py-11 px-16">
        <div className="flex items-center gap-[98px]">
          <img src={logo} alt="" />
          <ul className="flex justify-between gap-16 text-lg font-semibold uppercase leading-4 text-sky-base">
            <li className="active-nav--item">
              <a href="#">My Cards</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex overflow-hidden rounded-base ">
            <div className="flex items-center bg-red-base p-3">
              <img src={walletIcon} alt="" />
            </div>
            <div className="flex items-center bg-ink-dark py-3 px-5 text-xl font-bold text-sky-white">
              € {Number(balance).toFixed(2)}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
