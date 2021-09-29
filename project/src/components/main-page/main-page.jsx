import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import PopupLogin from '../popup-login/popup-login';
import ServicesSection from '../services-section/services-section';
import Calculator from '../calculator/calculator';
import Map from '../map/map';
import PopupSuccess from '../popup-success/popup-success';
import Footer from '../footer/footer';
import {getPopupSuccessStatus} from '../../store/app-interaction/selectors';
import {onEscKeyDown} from '../../util.js';

export default function MainPage() {
  const [isPopupLoginActive, setPopupLoginStatus] = useState(false);

  const isPopupSuccessActive = useSelector(getPopupSuccessStatus);

  const bodyElement = document.querySelector('body');

  const handleKeyDown = (evt) => {
    onEscKeyDown(evt, () => setPopupLoginStatus(false));
    bodyElement.classList.remove('page__body--unactive');
  };

  if (isPopupLoginActive || isPopupSuccessActive) {
    bodyElement.classList.add('page__body--unactive');
  }

  return (
    <>
      <Header onLoginClick={() => setPopupLoginStatus(true)} onKeyDown={handleKeyDown}/>
      <main className="page-main">
        <h1 className="visually-hidden">Лига банк</h1>
        <PromoSlider />
        <ServicesSection />
        <Calculator/>
        <Map/>
        <Footer />
        {isPopupLoginActive && <PopupLogin onCloseClick={() => setPopupLoginStatus(false)} onKeyDown={handleKeyDown}/>}
        {isPopupSuccessActive && <PopupSuccess />}
      </main>
    </>
  );
}
