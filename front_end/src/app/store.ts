import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import foodSlice from "../features/foodReducer";
export const store = configureStore({
  reducer: {
    foodSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
