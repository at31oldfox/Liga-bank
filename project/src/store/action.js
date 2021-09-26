import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_OPTION: '/changeOption',
  SET_POPUP_SUCCESS_STATUS: '/setPopupSuccessStatus',
  SET_APPLICATION_NUMBER: 'setApplicationNumber',
};

export const changeOption = createAction(ActionType.CHANGE_OPTION, (option) => ({
  payload: option,
}));

export const setPopupSuccessStatus = createAction(ActionType.SET_POPUP_SUCCESS_STATUS, (status) => ({
  payload: status,
}));

export const setApplicationNumber = createAction(ActionType.SET_APPLICATION_NUMBER);
