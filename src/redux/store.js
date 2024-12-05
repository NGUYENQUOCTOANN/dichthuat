import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "./vocabSlice";

const store = configureStore({
  reducer: {
    vocabulary: vocabReducer,
  },
});

export default store;
