import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveOption} from '../../store/app-interaction/selectors';
import {CreditTypeFieldValue, MIN_HYPOTHEC_SUM, MIN_AUTOCREDIT_SUM} from '../../const.js';

export default function Reject() {

  const activeOption = useSelector(getActiveOption);

  const creditType = activeOption === CreditTypeFieldValue.HYPOTHEC ? 'ипотечные' : 'автомобильные';
  const minCreditSum = activeOption === CreditTypeFieldValue.HYPOTHEC ? MIN_HYPOTHEC_SUM.toLocaleString() : MIN_AUTOCREDIT_SUM.toLocaleString();

  return (
    <section className="reject">
      <div className="reject__wrapper">
        <p className="reject__message">
          Наш банк не выдаёт {creditType} кредиты меньше {minCreditSum} рублей.
        </p>
        <p className="reject__offer">Попробуйте использовать другие параметры для расчёта.</p>
      </div>
    </section>
  );
}
