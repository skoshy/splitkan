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
    currentBill: {},
  },
  types: {
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
  },
});
