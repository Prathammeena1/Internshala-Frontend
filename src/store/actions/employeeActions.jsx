import axios from "../../utils/axios";
import { setemployee } from "../reducers/employeeSlice";




export const getemployee = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/employee');
        if (data.employee) {
            dispatch(setemployee(data.employee));
        }
        console.log(data);
    } catch (error) {
        if(error.response.data.errName == "TokenExpiredError"){
            alert('login again!')
        }
    }
};

export const loginemployee = (employeeInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/employee/signin',employeeInfo);
    // document.cookie = `token=${data.token}`
    await dispatch(getemployee())
}

export const logoutemployee = ()=> async (dispatch)=>{
    const {data} = await axios.get('/employee/signout');
    console.log(data);
    dispatch(setemployee({}));
    await dispatch(getemployee())
}

export const registeremployee = (employeeInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/employee/signup',employeeInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getemployee())
}

