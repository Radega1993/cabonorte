import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice, productSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        product: productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

})