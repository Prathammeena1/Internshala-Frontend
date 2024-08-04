import axios from "../../utils/axios";
import { setstudent } from "../reducers/studentSlice";





export const getstudent = ()=> async (dispatch)=>{
    console.log()
    const {data} = await axios.get('/student');
    data.student && setstudent(data.student)
    console.log(data);
}



export const loginstudent = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signin',studentInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}

export const registerstudent = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signup',studentInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}