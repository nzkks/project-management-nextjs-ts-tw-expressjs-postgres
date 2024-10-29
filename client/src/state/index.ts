import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateTypes = {
  isDarkMode: boolean;
  isSidebarCollapsed: boolean;
};

const initialState: initialStateTypes = {
  isDarkMode: false,
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;
export default globalSlice.reducer;
