import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetail: JSON.parse(localStorage.getItem("user")) || {}
};
console.log("initial state: ",initialState.userDetail)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUsers: (state) => {
            console.log("state: ",state);
            state.userDetail = JSON.parse(localStorage.getItem("user")) || {};
        },
        updateUserDetails: (state, action) => {
            state.userDetail = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        }
    }
});

export const { fetchUsers, updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
