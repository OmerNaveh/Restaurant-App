import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({ name: "food", initialState: {}, reducers: {} });

export const foodAction = foodSlice.actions;
export default foodSlice.reducer;
