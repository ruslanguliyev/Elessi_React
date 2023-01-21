import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginOpen: false,
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsLoginOpen: (state) => {
            state.isLoginOpen = !state.isLoginOpen;
        },
    }
});

export const {
    setIsLoginOpen
}= loginSlice.actions;

export default loginSlice.reducer;
