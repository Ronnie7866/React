import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

/* we have to return full store object not only single value otherwise will get NaN value or error
 * We have 2 solution for this
 * 1.  Spread Operator
 * 2.  React Toolkit */

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACT") {
    return {
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY-TOGGLE") {
    return { counter: store.counter, privacy: !store.privacy };
  }

  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
