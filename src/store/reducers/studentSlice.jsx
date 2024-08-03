import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  student: {},
}

export const counterSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setstudent: (state,action)=>{
        state.student = action.payload;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setstudent } = counterSlice.actions

export default counterSlice.reducer