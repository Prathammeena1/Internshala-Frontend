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
        console.error('Error fetching employee data:', error);
    }
};

export const loginemployee = (employeeInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/employee/signin',employeeInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getemployee())
}

export const registeremployee = (employeeInfo)=> async (dispatch)=>{
    const {data} = await axios.post('/employee/signup',employeeInfo);
    document.cookie = `token=${data.token}`
    await dispatch(getemployee())
}