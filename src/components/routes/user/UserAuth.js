import { Button, Input } from '@mantine/core'
import React, { useRef } from 'react'
import "../../../App.css"
import { useNavigate } from "react-router-dom";

export default function UserAuth() {
  let navigate = useNavigate()

  const refUsername = useRef("")
  const refPhNumber = useRef("")

  const fnSaveToStorage = () =>{
    window.localStorage.setItem("keyUsername", refUsername.current.value)
    window.localStorage.setItem("keyPhonenumber", refPhNumber.current.value)
    navigate("/user")
    
  } 
  return (
    <>

     <div className="cf h100">
        <div className="">
            <h2>Quick signup</h2>
        </div>

        <div className="cf">
         
            <Input type="text" ref={refUsername} required={true} m="md" placeholder='Username' />   
            <Input type="number" ref={refPhNumber} required={true} placeholder='Phone number' />  
            <Button type='submit' m="md" onClick={fnSaveToStorage}> Login </Button> 

        </div>
    </div> 
    </>
  )
}