import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  subscribtion: "",
  photo:
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  _id: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { firstName, lastName, _id, email } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state._id = _id;
    },
    updateProfile: (state, action) => {
      const { photo } = action.payload;
      // state.firstName = firstName && firstName;
      // state.lastName = lastName && lastName;
      // state.email = email && email;
      state.photo = photo;
    },
    updateSubscription: (state, action) => {
      state.subscribtion = action.payload.subscribtion;
    },

    deleteUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.subscribtion = "";
      state.photo = "";
      state._id = "";
    },
  },
});

export const { updateUser, deleteUser, updateProfile } = UserSlice.actions;

// export const firstName = (state) => state.auth.firstName;
// export const lastName = (state) => state.auth.lastName;
// export const email = (state) => state.auth.email;
// export const subscribtion = (state) => state.auth.subscribtion;
// export const photo = (state) => state.auth.photo;
// export const _id = (state) => state.auth._id;
export default UserSlice.reducer;
