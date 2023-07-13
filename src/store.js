import { configureStore, createSlice } from "@reduxjs/toolkit";

let formData = createSlice({
  name: "formData",
  initialState: [],
  reducers : {
    updateForm(state, action){
        return action.payload
    }
  }
});
export let {updateForm} = formData.actions

export default configureStore({
  reducer: {
    formData : formData.reducer,
  },
});
