import React from 'react';
import PropTypes from 'prop-types';
import {CreditTypeFieldValue} from '../../const.js';

export default function Offer({activeOption, creditSum, rate, mounthlyPayment, requiredIncome}) {

  return (
    <div className="extra-wrapper">
      <section className="offer">
        <div className="offer__wrapper">
          <h3 className="offer__title">Наше предложение</h3>
          <dl className="offer__list">
            <div className="offer__group">
              <dt className="offer__item">Сумма {activeOption === CreditTypeFieldValue.HYPOTHEC ? 'ипотеки' : 'автокредита'}</dt>
              <dd className="offer__value">{creditSum.toLocaleString()} рублей</dd>
            </div>

            <div className="offer__group">
              <dt className="offer__item">Процентная ставка</dt>
              <dd className="offer__value">{parseFloat(rate).toFixed(2)}%</dd>
            </div>

            <div className="offer__group">
              <dt className="offer__item">Ежемесячный платёж</dt>
              <dd className="offer__value">{mounthlyPayment.toLocaleString()} рублей</dd>
            </div>

            <div className="offer__group">
              <dt className="offer__item">Необходимый доход</dt>
              <dd className="offer__value">{requiredIncome.toLocaleString()} рублей</dd>
            </div>
          </dl>
          <button className="offer__button" type="submit">Оформить заявку</button>
        </div>
      </section>
    </div>
  );
}

Offer.propTypes = {
  activeOption: PropTypes.string.isRequired,
  creditSum: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  mounthlyPayment: PropTypes.number.isRequired,
  requiredIncome: PropTypes.number.isRequired,
}
