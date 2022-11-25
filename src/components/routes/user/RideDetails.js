import React, { useRef, useState } from 'react'

export default function RideDetails() {
    
    // const [stUser, setStUser] = useState({hex:"", from:"", to:"" })
    const [stWalAddress, setStWalAddress] = useState("0x")

    const refFrom = useRef("FromDefault") 
    const refTo = useRef("ToDefault")
    
    function ls(){
        //Setting data in local storage
        window.localStorage.setItem("keyFrom", refFrom.current.value)
        window.localStorage.setItem("keyWalAddress", stWalAddress)
        console.log(refFrom.current.value)
        setStWalAddress("0xsfs")
    }
    
  return (
    <>

    Component - RideDetails.js
      <div className="">
        <input type="text" ref = {refFrom} placeholder='From' />
        <input type="text" ref = {refTo} placeholder='To' />
        <button onClick={ls}>Confirm</button>
        Output:
        
        {stWalAddress}

      </div>
    </>
  )
}
