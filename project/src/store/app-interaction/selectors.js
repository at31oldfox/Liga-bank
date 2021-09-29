import {REDUSER_NAME} from '../../const';

export const getActiveOption = (state) => state[REDUSER_NAME].option;
export const getPopupSuccessStatus = (state) => state[REDUSER_NAME].isPopupSuccessActive;
export const getApplicationNumber = (state) => state[REDUSER_NAME].applicationNumber;
