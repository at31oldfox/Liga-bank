import React from 'react';
import {useState} from 'react';

export default function Header() {
  const [isMenuOpened, setMenuStatus] = useState(false);

  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <picture>
            <source media="(min-width: 1200px)" srcSet="img/logo-desktop.svg"/>
            <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg"/>
            <img className="page-header__logo" src="img/logo-mobile.svg" alt="Логотип"/>
          </picture>
        </div>
        <nav className={`navigation ${isMenuOpened ? 'navigation--opened' : 'navigation--closed'}`}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Услуги
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Рассчитать кредит
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Конвертер валют
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Контакты
              </a>
            </li>
          </ul>
          <div className="navigation__login">
            <a className="navigation__login-link" href="#"><span className="navigation__login-text">Войти в Интернет-банк</span></a>
          </div>
          <button
            className="navigation__button"
            type="button"
            aria-label="Открыть меню"
            onClick={() => setMenuStatus(true)}
          >
          </button>
          <button
            className="navigation__close"
            type="button"
            aria-label="Закрыть меню"
            onClick={() => setMenuStatus(false)}
          >
          </button>
        </nav>
      </div>
    </header>
  );
}
