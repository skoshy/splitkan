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
  (bills, currentBillLocalId) => (
    bills.find(bill => bill.LocalId === currentBillLocalId)
  ),
);

export { selectors };
export default null;
