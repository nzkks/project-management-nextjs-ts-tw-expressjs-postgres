import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateTypes = {
  isDarkMode: boolean;
};

const initialState: initialStateTypes = {
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
