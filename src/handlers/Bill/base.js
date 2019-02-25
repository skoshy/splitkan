import { createHandler } from 'redux-dusk';
import { selectors } from './selectors';
import Bill from '../../entities/Bill';

export const nameSpace = `BILL`;

export const {
  types,
  actions,
  reducer,
} = createHandler({
  nameSpace,
  initialState: {
    bills: [],
    currentBillLocalId: ``,
  },
  types: {
    SET: {
      CURRENT_BILL: {
        action: [`currentBillLocalId`],
        reducer: {
          reduce: [`currentBillLocalId`],
        },
      },
    },
    CREATE: {
      ITEM: {
        action: [],
        reducer: (spaceState, action) => {
          const currentBill = selectors.getCurrentBill({ [nameSpace]: spaceState });
          console.log(currentBill);
        },
      },
      BILL: {
        action: [],
        reducer: (spaceState, action) => {
          const bills = spaceState.bills.slice(0);
          bills.push(Bill());
          console.log(`new bills`, bills);

          return { ...spaceState, bills };
        },
      },
    },
    FETCH: {
      BILLS: {
        action: [],

        SUCCESS: {
          action: [`bills`],
          reducer: [`bills`],
        },

        FAILURE: {
          action: [],
        },
      },
    },
    RESET: {
      ALL: {
        action: [],
        reducer: {
          reset: true,
        },
      },
    },
  },
});
