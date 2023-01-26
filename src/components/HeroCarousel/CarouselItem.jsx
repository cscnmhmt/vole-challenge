import React from 'react';

const CarouselItem = function ({ item }) {
  return (
    <div>
      <div className="mb-[30px] flex items-center justify-between px-[287px]">
        <div className="text-sky-white">
          <h1 className="text-left text-[72px] font-bold uppercase leading-[90px]">
            New
          </h1>
          <h2 className="uppercase">{item.title}</h2>
        </div>
        <div>
          <img src={item.url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
