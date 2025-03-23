import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice';
import footerReducer from './footerSlice';


const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        footer: footerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
