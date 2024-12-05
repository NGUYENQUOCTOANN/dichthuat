import { createSlice } from "@reduxjs/toolkit";

const vocabSlice = createSlice({
  name: "vocabulary",
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
    },
    removeWord: (state, action) => {
      return state.filter((word) => word.id !== action.payload);
    },
  },
});

export const { addWord, removeWord } = vocabSlice.actions;
export default vocabSlice.reducer;
