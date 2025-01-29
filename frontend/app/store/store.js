import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // We'll create a user slice for managing user data
import globalReducer from './globalSlice';
import authSlice from "@/app/store/authSlice";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        user: userReducer,
        global: globalReducer,
        auth: authSlice
    },
});