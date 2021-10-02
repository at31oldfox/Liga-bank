import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MAX_PROPERTY_PRICE, MIN_PROPERTY_PRICE, DEFAULT_PRICE_VALUE, DEFAULT_PROPERTY_PERCENT_VALUE, DEFAULT_AUTO_PERCENT_VALUE, ERROR_MESSAGE,
  PROPERTY_PRICE_STEP, AUTO_PRICE_STEP, PERCENT_STEP, MIN_HYPOTHEC_TERM, MAX_HYPOTHEC_TERM, CreditTypeFieldValue,
  MAX_AUTO_PRICE, MIN_AUTO_PRICE, MIN_HYPOTHEC_SUM, MIN_AUTOCREDIT_SUM,
  MATERNAL_CAPITAL, MIN_AUTOCREDIT_TERM, MAX_AUTOCREDIT_TERM, HypothecRateType, HYPOTHEC_RATE_BOARD,
  AutocreditRateType, AUTO_PRICE_BOARD, MOUNTH_COUNT, MIN_SHARE_OF_INCOME} from '../../const.js';
import {roundNumber} from '../../util.js';
import Offer from '../offer/offer';
import Reject from '../reject/reject';
import HypothecCheckbox from '../hypothec-checkbox/hypothec-checkbox';
import AutocreditCheckbox from '../autocredit-checkbox/autocredit-checkbox';

export default function Step2({activeOption, priceFieldValue, percent, term, onPriceFieldValueChange, onPercentChange, onTermChange, fee, onFeeChange}) {
  const [isPriceFieldActive, setPriceFieldStatus] = useState(false);
  const [isFeeFieldActive, setFeeFieldStatus] = useState(false);
  const [isTermFieldActive, setTermFieldStatus] = useState(false);
  const [initialCordinate, setInitialCordinate] = useState(0);
  const [resultCordinate, setResultCordinate] = useState(0);
  const [isMaterialCapital, setMaterialCapitalStatus] = useState(true);
  const [isAutoInsurance, setAutoInsuranceStatus] = useState(true);
  const [isLifeInsurance, setLifeInsuranceStatus] = useState(true);

  const minPrice = activeOption === CreditTypeFieldValue.HYPOTHEC ? MIN_PROPERTY_PRICE : MIN_AUTO_PRICE;

  const maxPrice = activeOption === CreditTypeFieldValue.HYPOTHEC ? MAX_PROPERTY_PRICE : MAX_AUTO_PRICE;

  const priceStep = activeOption === CreditTypeFieldValue.HYPOTHEC ? PROPERTY_PRICE_STEP : AUTO_PRICE_STEP;

  const percentValue = activeOption === CreditTypeFieldValue.HYPOTHEC ? percent : percent;

  const minCreditSum = activeOption === CreditTypeFieldValue.HYPOTHEC ? MIN_HYPOTHEC_SUM : MIN_AUTOCREDIT_SUM;

  const additionCapital = isMaterialCapital ? MATERNAL_CAPITAL : 0;

  const defaultPercentValue = activeOption === CreditTypeFieldValue.HYPOTHEC ? DEFAULT_PROPERTY_PERCENT_VALUE : DEFAULT_AUTO_PERCENT_VALUE;

  const defaultFee = activeOption === CreditTypeFieldValue.HYPOTHEC ? priceFieldValue * (percent / 100) : priceFieldValue * (percent / 100);

  const minTerm = activeOption === CreditTypeFieldValue.HYPOTHEC ? MIN_HYPOTHEC_TERM : MIN_AUTOCREDIT_TERM;

  const maxTerm = activeOption === CreditTypeFieldValue.HYPOTHEC ? MAX_HYPOTHEC_TERM : MAX_AUTOCREDIT_TERM;

  const feeValue = !fee ? defaultFee : fee;

  const handlePriceChange = (evt) => {
    const value = Number(evt.target.value);
    if (typeof value === 'number') {
      onPriceFieldValueChange(Number(evt.target.value))
    }
  }

  const checkPrice = (evt) => {
    setPriceFieldStatus(false);
    const value = Number(evt.target.value);

    if (value < minPrice || value > maxPrice){
      onPriceFieldValueChange(ERROR_MESSAGE);
      onFeeChange(ERROR_MESSAGE);
    }
  }

  const handleMinusButtonClick = (evt) => {
    evt.preventDefault();
    onPriceFieldValueChange(priceFieldValue - priceStep);
  }

  const handlePlusButtonClick = (evt) => {
    evt.preventDefault();
    onPriceFieldValueChange(priceFieldValue + priceStep);
  }

  const handleRangeChange = (evt) => {
    onPercentChange(evt.target.value);

    onFeeChange(priceFieldValue * evt.target.value / 100);
  }

  const handleFeeValueChange = (evt) => {
    const value = Number(evt.target.value.replace(/\s/g, ''));
    if (typeof value === 'number') {
      const percentResultValue = value / priceFieldValue * 100;

      onFeeChange(value);

      onPercentChange(percentResultValue);
    }
  }

  const checkFeeField = (evt) => {
    const value = Number(evt.target.value.replace(/\s/g, ''));
    if (value >= priceFieldValue || value < priceFieldValue * (defaultPercentValue / 100)) {
        onFeeChange(priceFieldValue * (defaultPercentValue / 100));

        onPercentChange(defaultPercentValue);
    }
    setFeeFieldStatus(false);
  }

  const switchPriceTitle = () => {
    switch(activeOption) {
      case CreditTypeFieldValue.HYPOTHEC:
        return 'Стоимость недвижимости';
      case CreditTypeFieldValue.AUTOCREDIT:
        return 'Стоимость автомобиля';
      default:
        return 'Стоимость';
    }
  }

  const checkTerm = (evt) => {
    if (term < minTerm) {
      onTermChange(minTerm);
    } else if (term > maxTerm) {
      onTermChange(maxTerm);
    }
    setTermFieldStatus(false);
  }

  const handleTermValueChange = (evt) => {
    const value = Number(evt.target.value);
    if (typeof value === 'number') {
      onTermChange(value);
    }
  }


  const countCreditSum = () => {
    if (typeof priceFieldValue === 'number') {
      if (activeOption === CreditTypeFieldValue.HYPOTHEC) {
        return priceFieldValue - additionCapital - feeValue;
      }

      if (activeOption === CreditTypeFieldValue.AUTOCREDIT) {
        return priceFieldValue - feeValue;
      }
    }
  }

  const setRate = () => {
    if (typeof priceFieldValue === 'number') {
      if (activeOption === CreditTypeFieldValue.HYPOTHEC) {
        return percent < HYPOTHEC_RATE_BOARD ? HypothecRateType.FIRST : HypothecRateType.SECOND;
      }

      if (activeOption === CreditTypeFieldValue.AUTOCREDIT) {
        if (isAutoInsurance && isLifeInsurance) {
          return AutocreditRateType.FOURTH;
        } else if(isAutoInsurance || isLifeInsurance) {
          return AutocreditRateType.THIRD;
        } else if (priceFieldValue >= AUTO_PRICE_BOARD) {
          return AutocreditRateType.SECOND;
        } else {
          return AutocreditRateType.FIRST;
        }
      }
    }
  }

  const creditSum = countCreditSum();
  const rate = setRate();

  const countMounthlyPayment = () => {
    const mounthlyRate = rate/100/MOUNTH_COUNT;
    const termValue = !term ? minTerm : term;
    const allMounthCount = termValue * MOUNTH_COUNT;
    return creditSum * (mounthlyRate + (mounthlyRate / (Math.pow((1 + mounthlyRate), allMounthCount) - 1)));
  }

  const mounthlyPayment = countMounthlyPayment();

  return (
    <>
      <section className="calculator__section calculator__section--2">
        <h3 className="calculator__section-title">Шаг 2. Введите параметры кредита</h3>
        <div className="calculator__group">
          <label className="calculator__label" htmlFor="price">{switchPriceTitle()}</label>
          <div className="calculator__field-wrapper">
            <input
              className="calculator__input"
              type="text"
              name="price-field"
              id="price"
              value={`${isPriceFieldActive ? priceFieldValue : priceFieldValue.toLocaleString()}${typeof priceFieldValue === 'number' && !isPriceFieldActive ? ' рублей' : ''}`}
              onChange={handlePriceChange}
              onFocus={() => setPriceFieldStatus(true)}
              onBlur={checkPrice}
              style={typeof priceFieldValue !== 'number' ? {color: 'red', borderColor: 'red'} : {}}
            />
            <button
              className="calculator__minus"
              aria-label="Минус"
              onClick={handleMinusButtonClick}
              disabled={priceFieldValue === minPrice}
            >
            </button>
            <button
              className="calculator__plus"
              aria-label="Плюс"
              onClick={handlePlusButtonClick}
              disabled={priceFieldValue === maxPrice}
            >
            </button>
          </div>
          <span className="calculator__mark">{`От ${minPrice.toLocaleString()} до ${maxPrice.toLocaleString()} рублей`}</span>
        </div>

        <div className="calculator__group">
          <label className="calculator__label" htmlFor="fee">Первоначальный взнос</label>
          <input
            className="calculator__input"
            type="text"
            value={`${feeValue.toLocaleString()}${typeof priceFieldValue === 'number' && !isFeeFieldActive ? ' рублей' : ''}`}
            onChange={handleFeeValueChange}
            onFocus={() => setFeeFieldStatus(true)}
            onBlur={checkFeeField}
            id="fee"
            style={typeof priceFieldValue !== 'number' ? {color: 'red', borderColor: 'red'} : {}}
          />
          <div className="range">
            <input
              className="range__bar"
              type="range"
              min={activeOption === CreditTypeFieldValue.HYPOTHEC ? DEFAULT_PROPERTY_PERCENT_VALUE : DEFAULT_AUTO_PERCENT_VALUE}
              max="100"
              value={roundNumber(percentValue)}
              step="5"
              onChange={handleRangeChange}
            />
            <span className="range__inscription">{roundNumber(percentValue)}%</span>
          </div>
        </div>

{/* можно делать отдельный элемент - инпут со слайдером */}
        <div className="calculator__group">
          <label className="calculator__label" htmlFor="term">Срок кредитования</label>
          <input
            className="calculator__input"
            type="text"
            id="term"
            value={`${!term ? minTerm : term}${!isTermFieldActive ? ' лет' : ''}`}
            onFocus={() => setTermFieldStatus(true)}
            onChange={handleTermValueChange}
            onBlur={checkTerm}
          />
          <div className="range range--term">
            <input
              className="range__bar"
              type="range"
              min={minTerm}
              max={maxTerm}
              value={term}
              step="1"
              onChange={(evt) => onTermChange(evt.target.value)}
            />
            <div className="range__inscriptions">
              <span className="range__inscription range__inscription--min">{minTerm}{minTerm === MIN_AUTOCREDIT_TERM ? ' год' : ' лет'}</span>
              <span className="range__inscription range__inscription--max">{maxTerm} лет</span>
            </div>
          </div>
        </div>

        {activeOption === CreditTypeFieldValue.HYPOTHEC
          ? <HypothecCheckbox isMaterialCapital={isMaterialCapital} onCheckboxClick={() => setMaterialCapitalStatus(!isMaterialCapital)}/>
          : <AutocreditCheckbox isAutoInsurance={isAutoInsurance} onAutoInshuranceCheckboxClick={() => setAutoInsuranceStatus(!isAutoInsurance)}
            isLifeInsurance={isLifeInsurance} onLifeInsuranceCheckboxClick={() => setLifeInsuranceStatus(!isLifeInsurance)}
            />
        }
      </section>
      {creditSum >= minCreditSum
        ? <Offer activeOption={activeOption} creditSum={creditSum} rate={rate} mounthlyPayment={Math.ceil(mounthlyPayment)} requiredIncome={Math.ceil(mounthlyPayment/(MIN_SHARE_OF_INCOME / 100))}/>
        : <Reject />
      }
    </>
  );
}

Step2.propTypes = {
  activeOption: PropTypes.string.isRequired,
  priceFieldValue: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  onPriceFieldValueChange: PropTypes.func.isRequired,
  onPercentChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
  fee: PropTypes.number.isRequired,
  onFeeChange: PropTypes.func.isRequired,
}
