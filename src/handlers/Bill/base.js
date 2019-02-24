import { createHandler } from 'redux-dusk';

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
