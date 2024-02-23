import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageSlice";
import themeReducer from "./themeSlice";
import langReducer from "./langSlice";
const appStore = configureStore({
    reducer: {
        msg: messageReducer,
        theme: themeReducer,
        lang: langReducer

    },
});
export default appStore;