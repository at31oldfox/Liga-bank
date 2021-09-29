import React from 'react';
import PropTypes from 'prop-types';
import {CreditTypeFieldValue} from '../../const.js';

export default function Step1({activeOption, onOptionClick, isSelectActive, onSelectStatusChange}) {

  return (
    <section
      className={`calculator__section ${isSelectActive ? 'calculator__section--active' : ''}`}
      style={isSelectActive ? {marginBottom: `${59 * (Object.values(CreditTypeFieldValue).length - 1)}px`} : {}}
    >
      <h3 className="calculator__section-title">Шаг 1. Цель кредита</h3>

      <div className="calculator__select">
        <h3
          className="calculator__select-title"
          onClick={onSelectStatusChange}
        >
          {activeOption}
        </h3>
        <div className="calculator__select-content">
          <input className="calculator__radio-button" id="selectName0" type="radio" value="0" name="selectName" />
          <label className="calculator__description" htmlFor="selectName0">Выберите цель кредита</label>
          <input className="calculator__radio-button" id="selectName1" type="radio" value="1" name="selectName"/>
          <label
            className="calculator__description"
            htmlFor="selectName1"
            onClick={onOptionClick}
          >
            Ипотечное кредитование
          </label>
          <input className="calculator__radio-button" id="selectName2" type="radio" value="2" name="selectName"/>
          <label
            className="calculator__description"
            htmlFor="selectName2"
            onClick={onOptionClick}
          >
            Автомобильное кредитование
          </label>
        </div>
      </div>
    </section>
  );
}

Step1.propTypes = {
  activeOption: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  isSelectActive: PropTypes.bool.isRequired,
  onSelectStatusChange: PropTypes.func.isRequired,
}
