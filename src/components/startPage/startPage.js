import React from 'react'
import {useState,useEffect} from "react"



export default function StartPage() {
  console.log(1);
const [type, setType]=useState("users")
useEffect(()=>{
  console.log("comp has finished");

},[])
  return (
    <>
    <div style={{
      display:'flex',
      flexDirection:"column",
      alignItems:'center'
    }}>
      <div style={{
        fontSize:"50px",
        fontWeight:"bold"
      }}>startPage</div>
      <div >
        <h1> Ресурс : {type}</h1>
        <button onClick={()=>setType("users")}>users </button>
        <button onClick={()=>setType("todo")}>todo </button>
         <button onClick={()=>setType("posts")}>posts </button>
      </div>
    </div>
    </>
    
  )
}
