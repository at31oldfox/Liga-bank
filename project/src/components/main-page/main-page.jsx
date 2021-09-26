import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import PopupLogin from '../popup-login/popup-login';
import ServicesSection from '../services-section/services-section';
import Calculator from '../calculator/calculator';
import PopupSuccess from '../popup-success/popup-success';
import {getPopupSuccessStatus} from '../../store/selectors';
import {onEscKeyDown} from '../../util.js';

export default function MainPage() {
  const [isPopupLoginActive, setPopupLoginStatus] = useState(false);

  const isPopupSuccessActive = useSelector(getPopupSuccessStatus);

  const bodyElement = document.querySelector('body');

  const onKeyDown = (evt) => {
    onEscKeyDown(evt, () => setPopupLoginStatus(false));
  };

  if (isPopupLoginActive || isPopupSuccessActive) {
    bodyElement.classList.add('page__body--unactive');
  }

  if ((!isPopupLoginActive || !isPopupSuccessActive) && bodyElement.classList.contains('page__body--unactive')) {
    bodyElement.classList.remove('page__body--unactive')
  }

  return (
    <>
      <Header onLoginClick={() => setPopupLoginStatus(true)} onKeyDown={onKeyDown}/>
      <main className="page-main">
        <h1 className="visually-hidden">Лига банк</h1>
        <PromoSlider />
        <ServicesSection />
        <Calculator/>
        {isPopupLoginActive && <PopupLogin onCloseClick={() => setPopupLoginStatus(false)} onKeyDown={onKeyDown}/>}
        {isPopupSuccessActive && <PopupSuccess />}
      </main>
    </>
  );
}
