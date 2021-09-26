import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setPopupSuccessStatus} from '../../store/action';

export default function PopupLogin() {

  const dispatch = useDispatch();

  return (
    <section className="popup-success">
      <div className="popup-success__modal">
        <div className="popup-success__wrapper">
          <button
            className="popup-success__close"
            type="button"
            name="close"
            aria-label="Закрыть"
            onClick={() => {
              dispatch(setPopupSuccessStatus(false));
            }}
          >
          </button>
          <h3 className="popup-success__message">Спасибо за обращение в наш банк.</h3>
          <p className="popup-success__description">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
        </div>
      </div>
    </section>
  );
}
