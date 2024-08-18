// src/App.js
import React, { useEffect } from 'react';
import MainRouter from './routes/MainRouter';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getemployee } from './store/actions/employeeActions';
import { getstudent } from './store/actions/studentActions';
import { getinternships } from './store/actions/internshipActions';
import { getjobs } from './store/actions/jobActions';

function App() {


  const {employee} = useSelector(state => state.employeeSlice)
  const {student} = useSelector(state => state.studentSlice)
  const {internships} = useSelector(state => state.internshipSlice)

  // console.log(student)


  // console.log(internships)

  const dispatch = useDispatch()
  const loginUserJWT = ()=>{
    dispatch(getemployee())
    dispatch(getstudent())
    dispatch(getinternships())
    dispatch(getjobs())
  }


  useEffect(()=>{
    loginUserJWT()
  },[])



  return (
    <div className="App tracking-tighter text-zinc-200 bg-zinc-900 overflow-hidden">
      <Nav />
      <MainRouter/>
    </div>
  );
}

export default App;
