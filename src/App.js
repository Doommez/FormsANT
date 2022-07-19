import './App.css';
import {Routes,Route, Link} from "react-router-dom"
import { useState, useEffect} from 'react';


import StartPage from "./components/startPage/startPage" 
import Login from './components/login/login';
import Registr from './components/regist/registr';
import Error from './components/error/error';


function App() {
  const [classNameBlock,setClassNameBlock]=useState("btn-sign__up ");
let timer;

useEffect(()=>{
  console.log(timer);
  return clearTimeout(timer);
})

  function togleClass(){
    if(classNameBlock==="btn-sign__up "){
      setClassNameBlock("btn-sign__up slide-rotate-hor-top")
      timer=setTimeout(()=>{
        setClassNameBlock("btn-sign__up ")
      },800)
    }else{
      setClassNameBlock("btn-sign__up ")
    }
  }

  return (
    <>
    <header >
      <Link to={"/FormsANT"}>StartPage</Link>
      <Link to={"login"}>Sign in</Link>
      <Link to={"reg"} className={classNameBlock} onClick={togleClass}>Sign up</Link>
      

    </header>
    <div className='container'>
      <Routes>
          <Route path='/FormsANT' element={<StartPage/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='reg' element={<Registr/>}/>
          <Route path='errors' element={<Error/>}/>

      </Routes>
    </div>
  
    </>
    
  );
}

export default App;
