import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Step1 from '../step-1/step-1';
import Step2 from '../step-2/step-2';
import Step3 from '../step-3/step-3';
import {CreditTypeFieldValue} from '../../const.js';
import {getActiveOption} from '../../store/app-interaction/selectors';
import {changeOption} from '../../store/action';
import {DEFAULT_PRICE_VALUE, DEFAULT_PROPERTY_PERCENT_VALUE, DEFAULT_AUTO_PERCENT_VALUE, MIN_HYPOTHEC_TERM, MIN_AUTOCREDIT_TERM} from '../../const.js';

export default function Calculator() {
  const [isSelectActive, setSelectStatus] = useState(false);
  const [priceFieldValue, setPriceFieldValue] = useState(0);
  const [percent, setPercent] = useState(0);
  const [term, setTerm] = useState(0);
  const [fee, setFee] = useState(0);
  const [isApplicationFormVisible, setApplicationFormStatus] = useState(false);

  const activeOption = useSelector(getActiveOption);

  const dispatch = useDispatch();

  const handleOptionClick = (evt) => {
    dispatch(changeOption(evt.target.innerText));
    setSelectStatus(false);
    setPriceFieldValue(DEFAULT_PRICE_VALUE);
    setFee(0);
    if (evt.target.innerText === CreditTypeFieldValue.HYPOTHEC) {
      setPercent(DEFAULT_PROPERTY_PERCENT_VALUE);
      setTerm(MIN_HYPOTHEC_TERM);
    }

    if (evt.target.innerText === CreditTypeFieldValue.AUTOCREDIT) {
      setPercent(DEFAULT_AUTO_PERCENT_VALUE);
      setTerm(MIN_AUTOCREDIT_TERM);
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setApplicationFormStatus(true);
  }

  const handlePriceFieldValueChange = (value) => {
    setPriceFieldValue(value);
    if (isApplicationFormVisible) {
      setApplicationFormStatus(false);
    }
  }

  const handlePercentChange = (value) => {
    setPercent(value)
    if (isApplicationFormVisible) {
      setApplicationFormStatus(false);
    }
  }

  const handleTermChange = (value) => {
    setTerm(value);
    if (isApplicationFormVisible) {
      setApplicationFormStatus(false);
    }
  }

  const handleFeeChange = (value) => {
    setFee(value);
    if (isApplicationFormVisible) {
      setApplicationFormStatus(false);
    }
  }

  const handleApplicationSubmit = () => {
    dispatch(changeOption(CreditTypeFieldValue.DEFAULT));
    setApplicationFormStatus(false);
  }

  return (
    <div className="calculator">
      <div className="calculator__container container">
        <h2 className="calculator__title" id="calculator">Кредитный калькулятор</h2>
        <form
          className="calculator__form"
          method="get"
          action="https://echo.htmlacademy.ru/"
          name="calculator-form"
          onSubmit={handleFormSubmit}
        >
          <Step1
            activeOption={activeOption}
            onOptionClick={handleOptionClick}
            isSelectActive={isSelectActive}
            onSelectStatusChange={() => setSelectStatus(!isSelectActive)}/>
          {activeOption !== CreditTypeFieldValue.DEFAULT &&
            <Step2
              activeOption={activeOption}
              priceFieldValue={priceFieldValue}
              percent={percent}
              term={term}
              fee={fee}
              onPriceFieldValueChange={handlePriceFieldValueChange}
              onPercentChange={handlePercentChange}
              onTermChange={handleTermChange}
              onFeeChange={handleFeeChange}
            />}
        </form>
        {isApplicationFormVisible && <Step3 activeOption={activeOption} price={priceFieldValue} fee={fee} term={term} onApplicationSubmit={handleApplicationSubmit}/>}
      </div>
    </div>
  );
}
