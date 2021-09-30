import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

export default function Header({onLoginClick, onKeyDown}) {
  const [isMenuOpened, setMenuStatus] = useState(false);

  const bodyElement = document.querySelector('body');

  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <picture className="page-header__picture">
            <source media="(min-width: 1200px)" srcSet="img/logo-desktop.svg" width="149" height="25"/>
            <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg" width="133" height="22"/>
            <img className="page-header__logo" src="img/logo-mobile.svg" width="115" height="17" alt="Логотип"/>
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
            <a
              className="navigation__login-link"
              href="#"
              onClick={() => {
                onLoginClick();
                document.addEventListener('keydown', onKeyDown);
              }}
            >
              <span className="navigation__login-text">Войти в Интернет-банк</span>
            </a>
          </div>
          <button
            className="navigation__button"
            type="button"
            aria-label="Открыть меню"
            onClick={() => {
              setMenuStatus(true);
              bodyElement.classList.add('page__body--unactive');
            }}
          >
          </button>
          <button
            className="navigation__close"
            type="button"
            aria-label="Закрыть меню"
            onClick={() => {
              setMenuStatus(false);
              bodyElement.classList.remove('page__body--unactive');
            }}
          >
          </button>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}
