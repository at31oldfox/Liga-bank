import React from 'react';

export default function Footer() {

  return (
    <footer className="page-footer">
      <div className="page-footer__container container">
        <picture className="page-footer__picture">
          <source media="(min-width: 1200px)" srcSet="img/logo-desktop.svg" width="149" height="25"/>
          <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg" width="133" height="22"/>
          <img className="page-footer__logo" src="img/logo-mobile.svg" width="115" height="17" alt="Логотип"/>
          </picture>

          <p className="page-footer__license">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>

        <nav className="page-footer__navigation">
          <ul className="page-footer__menu">
            <li className="page-footer__menu-item">
              <a className="page-footer__menu-link" href="#">Услуги</a>
            </li>
            <li className="page-footer__menu-item">
              <a className="page-footer__menu-link" href="#">Рассчитать кредит</a>
            </li>
            <li className="page-footer__menu-item">
              <a className="page-footer__menu-link" href="#">Контакты</a>
            </li>
            <li className="page-footer__menu-item">
              <a className="page-footer__menu-link" href="#">Задать вопрос</a>
            </li>
          </ul>
        </nav>

        <ul className="page-footer__contacts">
          <li className="page-footer__contacts-item page-footer__contacts-item--ussd">
            <a href="tel:*0904" className="page-footer__contacts-link">*0904</a>
            <span className="page-footer__contacts-addition">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</span>
          </li>
          <li className="page-footer__contacts-item page-footer__contacts-item--tel">
            <a href="tel: +78001112233" className="page-footer__contacts-link">8 800 111 22 33</a>
            <span className="page-footer__contacts-addition">Бесплатный для всех городов России</span>
          </li>
        </ul>

        <ul className="page-footer__socials">
          <li className="page-footer__socials-item">
            <a className="page-footer__socials-link page-footer__socials-link--facebook"><span className="visually-hidden">Фейсбук</span></a>
          </li>
          <li className="page-footer__socials-item">
            <a  className="page-footer__socials-link page-footer__socials-link--instagram"><span className="visually-hidden">Инстаграм</span></a>
          </li>
          <li className="page-footer__socials-item">
            <a className="page-footer__socials-link page-footer__socials-link--twitter"><span className="visually-hidden">Твиттер</span></a>
          </li>
          <li className="page-footer__socials-item">
            <a className="page-footer__socials-link page-footer__socials-link--youtube"><span className="visually-hidden">Ютуб</span></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
