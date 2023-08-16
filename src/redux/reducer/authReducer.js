import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    // isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setUser, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;