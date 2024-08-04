// src/App.js
import React, { useEffect } from 'react';
import MainRouter from './routes/MainRouter';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getemployee } from './store/actions/employeeActions';
import { getstudent } from './store/actions/studentActions';

function App() {


  const {employee} = useSelector(state => state.employeeSlice)
  const {student} = useSelector(state => state.studentSlice)

  const dispatch = useDispatch()
  const loginUserJWT = ()=>{
    dispatch(getemployee())
    dispatch(getstudent())
  }


  useEffect(()=>{
    loginUserJWT()
  },[])



  return (
    <div className="App tracking-tighter text-darkGray">
      <Nav />
      <MainRouter/>
    </div>
  );
}

export default App;
