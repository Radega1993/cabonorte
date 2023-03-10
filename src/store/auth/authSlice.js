import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking',
        user: {},
        userInfo: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        },
        onLoadUserInfo: (state, {payload}) => {
            state.status = 'authenticated';
            state.userInfo = payload;
        }
    }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage, onLoadUserInfo } = authSlice.actions;