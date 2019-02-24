import { createSelector } from 'reselect';
import { nameSpace } from './base';

const selectors = {};

// base selectors
selectors.getBills = state => state[nameSpace].bills;
selectors.getCurrentBillLocalId = state => state[nameSpace].currentBillLocalId;

// special selectors
selectors.getCurrentBill = createSelector(
  // selectors to use
  selectors.getBills,
  selectors.getCurrentBillLocalId,
  // reselect selector
  (bills, currentBillLocalId) => {
    let currentBill = false;


    bills.every((bill) => {
      if (bill.LocalId === currentBillLocalId) {
        currentBill = bill;
        return false;
      }

      return true;
    });

    console.log('in selector', bills, currentBill, currentBillLocalId);

    return currentBill;
  },
);

export { selectors };
export default null;
