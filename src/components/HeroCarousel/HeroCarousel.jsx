import React, { useState } from 'react';

import bronzeCardsImg from '/bronze-cards.png';
import silverCardsImg from '/silver-cards.png';
import goldCardsImg from '/gold-cards.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './HeroCarousel.css';
import CarouselItem from './CarouselItem';

const HeroCarousel = function () {
  const CAROUSEL_INTERVAL = 6000;
  const [carouselItems, setCarouselItem] = useState([
    {
      title: 'Bronze Cards',
      url: bronzeCardsImg,
    },
    {
      title: 'Silver Cards',
      url: silverCardsImg,
    },
    {
      title: 'Gold Cards',
      url: goldCardsImg,
    },
  ]);
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval={CAROUSEL_INTERVAL} infinite="true">
        {carouselItems.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </AliceCarousel>
    </div>
  );
};

export default HeroCarousel;
