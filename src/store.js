import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./store/users/usersSlice";

const store = configureStore({
    reducer: {
        users:usersSlice
    }, 
});

export default store