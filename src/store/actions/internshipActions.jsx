import axios from "../../utils/axios";
import { setinternship } from "../reducers/internshipSlice";




export const getinternships = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/internship/all');
        if (data.internships) {
            dispatch(setinternship(data.internships));
        }
        // console.log(data);
    } catch (error) {
        console.error('Error fetching internship data:', error);
    }
};

export const createinternship = (internshipInfo)=> async (dispatch)=>{
    const {data} = await axios.post('employee/internship/create',internshipInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getinternships())
}

