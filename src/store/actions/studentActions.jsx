import axios from "../../utils/axios";
import { setstudent } from "../reducers/studentSlice";





export const getstudent = ()=> async (dispatch)=>{
    console.log()
    const {data} = await axios.get('/student');
    console.log(data);
}



export const login = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signin',studentInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}

export const register = (studentInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/student/signup',studentInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getstudent())
}