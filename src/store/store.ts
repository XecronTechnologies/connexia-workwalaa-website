import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";
import footerReducer from "./footerSlice";
import homeReducer from "./homeSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    footer: footerReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
