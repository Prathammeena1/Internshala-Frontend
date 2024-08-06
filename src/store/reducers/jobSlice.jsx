import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  jobs: [],
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setjob: (state,action)=>{
        state.jobs = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setjob } = jobSlice.actions

export default jobSlice.reducer