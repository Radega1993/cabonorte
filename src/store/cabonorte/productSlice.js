import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoadingProducts: true,
        products: [],
        activeProduct: null,
    },
    reducers: {
        onLoadProducts: (state, {payload = []}) => {
            state.isLoadingProducts = false;
            state.products = payload;
            payload.forEach(product  => {
                const exist = state.products.some(dbProduct => dbProduct.id === product.id);
                if (!exist) {
                    state.products.push( product)
                }
            });
        }
    }
});

export const { onLoadProducts } = productSlice.actions;