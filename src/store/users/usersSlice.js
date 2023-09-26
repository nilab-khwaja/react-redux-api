import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users:[],
    isLoading:false,
    error:null,
};

// Create an asynchronous action creator
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
      // Add your fetching logic here
      const response = await axios.get ('https://randomuser.me/api/?results=5')
      return  response.data.results;
    } catch (error) {
      // Handle errors and return them
      throw error;
    }
  });


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUsers.pending, (state) =>{
            state.isLoading = true ;
            state.error = null;
        })

        .addCase(fetchUsers.fulfilled, (state, action) =>{
            state.isLoading = false
            state.users = action.payload;
        })

        .addCase(fetchUsers.rejected, (state, action) =>{
            state.isLoading = false
            state.error = action.error.message;
        })
    }
});

export const  {} = usersSlice.actions;
export default usersSlice.reducer;