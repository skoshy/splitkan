import { createLogic } from 'redux-logic';
import { types, actions } from './base';
import { devLog } from '../../helpers';

export const logic = [
  createLogic({
    type: [types.FETCH_BILLS], // only apply this logic to this type
    cancelType: types.FETCH_BILLS_FAILURE, // cancel on this type
    latest: true, // only take latest

    process({ getState }, dispatch, done) {
      // here is where we would do a network request with axios, just supplying static data now

      dispatch(actions.fetchBillsSuccess());
      done();
    },
  }),
];

export default logic;
