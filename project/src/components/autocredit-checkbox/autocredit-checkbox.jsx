import React from 'react';
import PropTypes from 'prop-types';

export default function AutocreditCheckbox({isAutoInsurance, onAutoInshuranceCheckboxClick, isLifeInsurance, onLifeInsuranceCheckboxClick}) {

  return (
    <>
    <div className="calculator__group calculator__group--checkbox">
      <input
        className="calculator__checkbox visually-hidden"
        type="checkbox"
        id="autocredit-offer"
        checked={isAutoInsurance}
        onChange={onAutoInshuranceCheckboxClick}
      />
      <label className="calculator__label calculator__label--checkbox" htmlFor="autocredit-offer">Оформить КАСКО в нашем банке</label>
    </div>
    <div className="calculator__group calculator__group--checkbox">
      <input
        className="calculator__checkbox visually-hidden"
        type="checkbox"
        id="life-insurance"
        checked={isLifeInsurance}
        onChange={onLifeInsuranceCheckboxClick}
      />
      <label className="calculator__label calculator__label--checkbox" htmlFor="life-insurance">Оформить Страхование жизни в нашем банке</label>
    </div>
    </>
  );
}

AutocreditCheckbox.propTypes = {
  isAutoInsurance: PropTypes.bool.isRequired,
  onAutoInshuranceCheckboxClick: PropTypes.func.isRequired,
  isLifeInsurance: PropTypes.bool.isRequired,
  onLifeInsuranceCheckboxClick: PropTypes.func.isRequired,
}
