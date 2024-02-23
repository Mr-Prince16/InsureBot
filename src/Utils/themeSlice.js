import { createSlice } from "@reduxjs/toolkit";
const langSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});
export const { changeTheme } = configSlice.actions;

export default langSlice.reducer;