import React from 'react';
import {useState} from 'react';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import PopupLogin from '../popup-login/popup-login';
import ServicesSection from '../services-section/services-section';

export default function MainPage() {
  const [isPopupActive, setPopupStatus] = useState(false);

  const bodyElement = document.querySelector('body');

  const onEscKeyDown = (evt, func) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      setPopupStatus(false);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  if (isPopupActive) {
    bodyElement.classList.add('page__body--unactive');
  }

  if (!isPopupActive && bodyElement.classList.contains('page__body--unactive')) {
    bodyElement.classList.remove('page__body--unactive')
  }

  return (
    <>
      <Header onLoginClick={() => setPopupStatus(true)} onKeyDown={onEscKeyDown}/>
      <main className="page-main">
        <h1 className="visually-hidden">Лига банк</h1>
        <PromoSlider />
        <ServicesSection />
        {isPopupActive && <PopupLogin onCloseClick={() => setPopupStatus(false)} onKeyDown={onEscKeyDown}/>}
      </main>
    </>
  );
}
