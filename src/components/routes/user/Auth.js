import { Button, Input } from '@mantine/core'
import React, { useRef } from 'react'
import "../../../App.css"

export default function Auth() {

  const refUsername = useRef("")
  const refPhNumber = useRef("")

  const fnSaveToStorage = () =>{
    window.localStorage.setItem("username", refUsername.current.value)
    window.localStorage.setItem("username", refPhNumber.current.value)
  } 
  return (
    <>

     <div className="cf h100">
        <div className="">
            <h2>Quick signup</h2>
        </div>

        <div className="cf">
            <Input type="text" m="md" placeholder='Username' />   
            <Input type="number" placeholder=' Phone number' />  
            
            <Button m="md" onClick={fnSaveToStorage}> Login</Button> 
        </div>
    </div> 
    </>
  )
}
