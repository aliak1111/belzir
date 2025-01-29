import { createSlice } from '@reduxjs/toolkit';

// Initial state for user data
const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    mobile: '',
    loggedIn: false,
};

// User slice to manage login and registration states
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.mobile = action.payload.mobile;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.email = '';
            state.firstName = '';
            state.lastName = '';
            state.mobile = '';
            state.loggedIn = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
