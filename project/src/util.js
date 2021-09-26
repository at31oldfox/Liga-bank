export const roundNumber = (number) => {
  if (Number.isInteger(parseFloat(number))) {
    return number;
  }

  return parseFloat(number).toFixed(2);
}

export const onEscKeyDown = (evt, func) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    func();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};
