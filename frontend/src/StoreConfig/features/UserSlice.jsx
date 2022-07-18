import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  subscribtion: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { firstName, lastName, email, subscribtion } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.subscribtion = subscribtion;
    },
    deleteUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.subscribtion = "";
    },
  },
});

export const { updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
