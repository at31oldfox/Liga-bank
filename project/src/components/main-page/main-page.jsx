import React from 'react';
import {useState} from 'react';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import PopupLogin from '../popup-login/popup-login';

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
        <PromoSlider />
        {isPopupActive && <PopupLogin onCloseClick={() => setPopupStatus(false)} onKeyDown={onEscKeyDown}/>}
      </main>
    </>
  );
}
