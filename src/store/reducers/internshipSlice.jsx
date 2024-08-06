import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  internships: [],
}

export const internshipSlice = createSlice({
  name: 'internship',
  initialState,
  reducers: {
    setinternship: (state,action)=>{
        state.internships = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setinternship } = internshipSlice.actions

export default internshipSlice.reducer