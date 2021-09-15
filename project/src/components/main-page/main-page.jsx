import React from 'react';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import PopupLogin from '../popup-login/popup-login';

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <PromoSlider />
        <PopupLogin />
      </main>
    </>
  );
}
