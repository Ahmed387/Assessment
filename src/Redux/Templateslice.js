// Templateslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  userData: {},
  selectedTemplate: "",
};

// Simulated API URLs (replace with real API if needed)
const apiUrl = "https://dummyjson.com/users/add";
const apiUrlUpdate = "https://dummyjson.com/users";

// Async Thunks
export const addUserData = createAsyncThunk(
  "template/addUserData",
  async (values) => {
    try {
      const response = await axios.post(apiUrl, values);
      console.log("User added:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to add user:", error);
      throw error; // Rethrow for handling in components
    }
  }
);

export const updateUserData = createAsyncThunk(
  "template/updateUserData",
  async ({ id, values }) => {
    console.log("Updating user data for ID:", id);
    console.log("With values:", values);

    try {
      const response = await axios.put(`${apiUrlUpdate}/${id}`, values);
      console.log("Response from update:", response.data);
      return response.data;
    } catch (error) {
      console.error("Update failed:", error);
      throw error; // Rethrow for handling in components
    }
  }
);

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      console.log("Template selected:", action.payload);
      state.selectedTemplate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserData.fulfilled, (state, action) => {
        console.log("User data added:", action);
        state.userData = action.payload;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        console.log("User data updated:", action.payload);
      });
  },
});

export const { setTemplate } = templateSlice.actions;
export const templatereducer = templateSlice.reducer;
