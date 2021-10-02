import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPopupSuccessStatus, setApplicationNumber} from '../../store/action';
import {getApplicationNumber} from '../../store/app-interaction/selectors';
import MaskedInput from 'react-maskedinput';
import PropTypes from 'prop-types';
import {CreditTypeFieldValue, DEFAULT_PROPERTY_PERCENT_VALUE, DEFAULT_AUTO_PERCENT_VALUE, NUMBER_DIGIT_COUNT} from '../../const.js';
import {generateId, onEscKeyDown} from '../../util.js';

export default function Step3({activeOption, price, fee, term, onApplicationSubmit}) {
  const [initials, setInitials] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isFormCorrect, setFormStatus] = useState(true);

  const dispatch = useDispatch();

  const applicationNumber = useSelector(getApplicationNumber);

  const percent = activeOption === CreditTypeFieldValue.HYPOTHEC ? DEFAULT_PROPERTY_PERCENT_VALUE : DEFAULT_AUTO_PERCENT_VALUE;

  const defaultFee = activeOption === CreditTypeFieldValue.HYPOTHEC ? price * (percent / 100) : price * (percent / 100);

  const currentFee = !fee ? defaultFee : fee;

  const bodyElement = document.querySelector('body');

  // похоже на хелпер и можно убрать из компонента
  const formatNumber = (number) => {
    const stringFromNumber = String(number);
    const nullsCount = NUMBER_DIGIT_COUNT - stringFromNumber.length;
    return Array(nullsCount).fill(0).join('') + stringFromNumber;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    localStorage.setItem('initials', initials);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);

    setInitials('');
    setPhoneNumber('');
    setEmail('');

    dispatch(setPopupSuccessStatus(true));
    dispatch(setApplicationNumber());

    document.addEventListener('keydown', handleKeyDown);
    onApplicationSubmit();
  }

  const handleButtonClick = (evt) => {
    if (!initials || !phoneNumber || !email) {
      evt.preventDefault();
      setFormStatus(false);
      setTimeout(() => setFormStatus(true), 1000);
    }
  }

  const handleKeyDown = (evt) => {
    onEscKeyDown(evt, () => dispatch(setPopupSuccessStatus(false)));
  };

  return (
    <section className='calculator__section calculator__section--step3'>
      <h3 className="calculator__section-title calculator__section-title--step3">Шаг 3. Оформление заявки</h3>
      <div className="application">
        <dl className="application__list">
          <div className="application__group">
            <dt className="application__item">Номер заявки</dt>
            <dd className="application__value">№ {formatNumber(applicationNumber)}</dd>
          </div>

          <div className="application__group">
            <dt className="application__item">Цель кредита</dt>
            <dd className="application__value">{activeOption === CreditTypeFieldValue.HYPOTHEC ? 'Ипотека' : 'Автокредит'}</dd>
          </div>

          <div className="application__group">
            <dt className="application__item">Стоимость {activeOption === CreditTypeFieldValue.HYPOTHEC ? 'недвижимости' : 'автомобиля'}</dt>
            <dd className="application__value">{price.toLocaleString()} рублей</dd>
          </div>

          <div className="application__group">
            <dt className="application__item">Первоначальный взнос</dt>
            <dd className="application__value">{currentFee.toLocaleString()} рублей</dd>
          </div>

          <div className="application__group">
            <dt className="application__item">Срок кредитования</dt>
            <dd className="application__value">{term.toLocaleString()} лет</dd>
          </div>
        </dl>

        <form
          className={`application__form ${!isFormCorrect ? 'application__error' : ''}`}
          method="get"
          onSubmit={handleFormSubmit}
          action="https://echo.htmlacademy.ru/"
          name="application-form"
        >
          <label className="application__label visually-hidden" htmlFor="initials">ФИО</label>
          <input
            className="application__input"
            value={initials}
            onChange={(evt) => setInitials(evt.target.value)}
            type="text"
            placeholder="ФИО"
            id="initials"
            autoFocus
            required
          />

          <label className="application__label visually-hidden" htmlFor="phone">Телефон</label>
          <MaskedInput className="application__input" placeholder="Телефон" value={phoneNumber} mask="+7(111) 111-11-11" name="phoneNumber" onChange={(evt) => setPhoneNumber(evt.target.value)}/>

          <label className="application__label visually-hidden" htmlFor="email">E-mail</label>
          <input
            className="application__input"
            onChange={(evt) => setEmail(evt.target.value)}
            value={email}
            type="email"
            placeholder="E-mail"
            id="email"
            required
          />

          <div className="application__button">
            <button className="application__submit" type="submit" onClick={(evt) => {
              handleButtonClick(evt);
              bodyElement.classList.add('page__body--unactive');
            }}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

Step3.propTypes = {
  activeOption: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  onApplicationSubmit: PropTypes.func.isRequired,
}
