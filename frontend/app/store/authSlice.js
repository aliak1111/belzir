"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../lib/api"; // Import Axios instance

// Load user from localStorage
const loadUserFromStorage = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }
    return null;
};

// Initial state
const initialState = {
    user: loadUserFromStorage(),
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    loading: false,
    error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async (formData, { rejectWithValue }) => {
    try {
        const response = await api.post("/login", formData); // Use Axios instance
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
    }
});

// Async thunk for registration
export const registerUser = createAsyncThunk("auth/registerUser", async (formData, { rejectWithValue }) => {
    try {
        const response = await api.post("/register", formData); // Use Axios instance
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
});

// Auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
