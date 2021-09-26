import React from 'react';
import PropTypes from 'prop-types';

export default function HypothecCheckbox({isMaterialCapital, onCheckboxClick}) {

  return (
    <div className="calculator__group calculator__group--checkbox">
      <input
        className="calculator__checkbox visually-hidden"
        type="checkbox"
        id="checkbox"
        checked={isMaterialCapital}
        onChange={onCheckboxClick}
      />
      <label className="calculator__label calculator__label--checkbox" htmlFor="checkbox">Использовать материнский капитал</label>
    </div>
  );
}

HypothecCheckbox.propTypes = {
  isMaterialCapital: PropTypes.bool.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
}
