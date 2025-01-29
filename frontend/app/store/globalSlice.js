import { createSlice } from '@reduxjs/toolkit';

// Initial state for the modal (whether the login/register modal is visible)
const initialState = {
    showLoginRegister: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleLoginRegister: (state) => {
            state.showLoginRegister = !state.showLoginRegister;
        },
        openLoginRegister: (state) => {
            state.showLoginRegister = true;
        },
        closeLoginRegister: (state) => {
            state.showLoginRegister = false;
        },
    },
});

export const { toggleLoginRegister, openLoginRegister, closeLoginRegister } = globalSlice.actions;
export default globalSlice.reducer;
