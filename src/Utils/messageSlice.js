import { createSlice } from "@reduxjs/toolkit";
const langSlice = createSlice({
    name: "msg",
    initialState: {
        msg: "",
    },
    reducers: {
        changeMessage: (state, action) => {
            state.lang = action.payload;
        },
    },
});
export const { changeMessage } = configSlice.actions;

export default langSlice.reducer;