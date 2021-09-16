import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function PopupLogin({onCloseClick, onKeyDown}) {
  const [isPasswordVisable, setPasswordVisability] = useState(false);

  return (
    <section className="popup-login">
      <div className="popup-login__modal">
        <div className="popup-login__wrapper">
          <button
            className="popup-login__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => {
              onCloseClick();
              document.removeEventListener('keydown', onKeyDown);
            }}
          >
          </button>
          <div className="popup-login__logo">
            <img className="popup-login__logo-image" src="img/popup-logo.svg"/>
          </div>
          <form className="popup-login__form" method="post" action="https://echo.htmlacademy.ru/" name="review-form">
            <div className="popup-login__form-fields">
              <label className="popup-login__label" htmlFor="login">Логин</label>
              <input
                className="popup-login__input"
                type="text"
                name="login-field"
                id="login"
                required
                autoFocus
              >
              </input>
              <div className="popup-login__password-wrapper">
                <div className="popup-login__password">
                  <label className="popup-login__label" htmlFor="password">Пароль</label>
                  <input
                    className="popup-login__input"
                    type={isPasswordVisable ? 'text' : 'password'}
                    name="password-field"
                    id="password"
                  >
                  </input>
                  <button
                    type="button"
                    className="popup-login__show"
                    aria-label="Показать пароль"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setPasswordVisability(!isPasswordVisable);
                    }}
                  >
                  </button>
                </div>
              </div>
                <button className="popup-login__mark">Забыли пароль?</button>
            </div>
            <button
              className="popup-login__button"
              type="submit"
              name="submit"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

PopupLogin.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}
