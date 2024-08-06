import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  employee: {},
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setemployee: (state,action)=>{
        state.employee = action.payload;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setemployee } = employeeSlice.actions

export default employeeSlice.reducer