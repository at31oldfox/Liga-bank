import React from 'react';
import {useState} from 'react';
import Slider from 'infinite-react-carousel';
import {IMAGE_WIDTH} from '../../const.js';

export default function PromoSlider() {

  return (
    <Slider className="slider" arrows={false} dots={true} dotsClass={'slider__controls'} autoplay={true} autoplaySpeed={4000}>
      <div className="slider__item slider__item--first">
        <div className="slider__container container">
          <h1 className="slider__headling">Лига Банк</h1>
          <p className="slider__description">Кредиты на любой случай</p>
          <a className="slider__link">Рассчитать кредит</a>
        </div>
      </div>
      <div className="slider__item slider__item--second">
        <div className="slider__container container">
          <h1 className="slider__headling">Лига Банк</h1>
          <p className="slider__description">Ваша уверенность в завтрашнем дне</p>
        </div>
      </div>
      <div className="slider__item slider__item--third">
        <div className="slider__container container">
          <h1 className="slider__headling">Лига Банк</h1>
          <p className="slider__description">Всегда рядом</p>
          <a className="slider__link">Найти отделение</a>
        </div>
      </div>
    </Slider>
  );
}
