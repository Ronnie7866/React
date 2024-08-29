import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice.js";
import fetchStatusSlice from "./fetchStatusSlice.js";
import bagSlice from "./bagSlice.js";

// Create Store
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer, // Directly using the imported slice
    fetchStatus: fetchStatusSlice.reducer, // Directly using the imported slice
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
