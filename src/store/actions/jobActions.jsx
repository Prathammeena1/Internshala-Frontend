import axios from "../../utils/axios";
import { setjob } from "../reducers/jobSlice";




export const getjobs = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/job/all');
        if (data.jobs) {
            dispatch(setjob(data.jobs));
        }
        // console.log(data);
    } catch (error) {
        console.error('Error fetching job data:', error);
    }
};

export const createjob = (jobInfo)=> async (dispatch)=>{
    const {data} = await axios.post('employee/job/create',jobInfo,{
        headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content type
          },
    });
    await dispatch(getjobs())
    // console.log(data);
}

