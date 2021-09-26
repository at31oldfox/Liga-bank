import {createReducer} from '@reduxjs/toolkit';
import {changeOption, setPopupSuccessStatus, setApplicationNumber} from './action';
import {CreditTypeFieldValue} from '../const';

const initialState = {
  option: CreditTypeFieldValue.DEFAULT,
  isPopupSuccessActive: false,
  applicationNumber: 1,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeOption, (state, action) => {
      state.option = action.payload;
    })
    .addCase(setPopupSuccessStatus, (state, action) => {
      state.isPopupSuccessActive = action.payload;
    })
    .addCase(setApplicationNumber, (state, action) => {
      state.applicationNumber = state.applicationNumber + 1;
    });
});

export {reducer};
