import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function PopupLogin({onCloseClick, onKeyDown}) {
  const [isPasswordVisable, setPasswordVisability] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const bodyElement = document.querySelector('body');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    document.removeEventListener('keydown', onKeyDown);
    bodyElement.classList.remove('page__body--unactive');
    onCloseClick();
  }

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
              bodyElement.classList.remove('page__body--unactive');
            }}
          >
          </button>
          <div className="popup-login__logo">
            <img className="popup-login__logo-image" src="img/popup-logo.svg"/>
          </div>
          <form
            className="popup-login__form"
            method="post"
            onSubmit={handleFormSubmit}
            action="https://echo.htmlacademy.ru/"
            name="login-form"
          >
            <div className="popup-login__form-fields">
              <label className="popup-login__label" htmlFor="login">Логин</label>
              <input
                className="popup-login__input"
                type="text"
                name="login-field"
                id="login"
                required
                autoFocus
                value={login}
                onChange={(evt) => setLogin(evt.target.value)}
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
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    required
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
                <a className="popup-login__mark" href="#">Забыли пароль?</a>
            </div>
            <button
              className="popup-login__button"
              type="submit"
              name="submit"
              disabled={!login || !password}
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
