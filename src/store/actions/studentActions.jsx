import axios from "../../utils/axios";
import { setstudent } from "../reducers/studentSlice";




export const getstudent = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/student');
        if (data.student) {
            dispatch(setstudent(data.student));
        }
        console.log(data);
    } catch (error) {
        if(error.response.data.errName == "TokenExpiredError"){
            alert('login again!')
        }
    }
};

export const loginstudent = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signin',studentInfo);
    // document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}

export const logoutstudent = ()=> async (dispatch)=>{
    const {data} = await axios.get('/student/signout');
    console.log(data);
    dispatch(setstudent({}));
    await dispatch(getstudent())
}

export const registerstudent = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signup',studentInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}

