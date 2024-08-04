import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  employee: {},
}

export const counterSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setemployee: (state,action)=>{
        state.employee = action.payload;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setemployee } = counterSlice.actions

export default counterSlice.reducer