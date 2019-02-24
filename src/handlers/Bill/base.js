import { createHandler } from 'redux-dusk';
import Bill from '../../entities/Bill';

export const {
  nameSpace,
  types,
  actions,
  reducer,
} = createHandler({
  nameSpace: `BILL`,
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
