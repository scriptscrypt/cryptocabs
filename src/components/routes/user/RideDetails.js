import React, { useRef, useState } from 'react'

export default function RideDetails() {
    
    // const [stUser, setStUser] = useState({hex:"", from:"", to:"" })
    const [stWalAddress, setStWalAddress] = useState("0x")

    const [stCurLatitude, setStCurLatitude] = useState("0")
    const [stCurLongitude, setStCurLongitude] = useState("0")

    const refFrom = useRef("FromDefault") 
    const refTo = useRef("ToDefault")
    
    function ls(){
        //Setting data in local storage
        window.localStorage.setItem("keyFrom", refFrom.current.value)
        window.localStorage.setItem("keyWalAddress", stWalAddress)
        console.log(refFrom.current.value)
        setStWalAddress("0xsfs")
    }
        
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        setStCurLatitude("No Location detected")
      }
    }

    function showPosition(position) {
      setStCurLatitude(position.coords.latitude)
      setStCurLongitude(position.coords.longitude)
    }

    
  return (
    <>

    Component - RideDetails.js
      <div className="">
        {/* <input type="text" ref = {refFrom} placeholder='From' />
        <input type="text" ref = {refTo} placeholder='To' />
        <button onClick={ls}>Confirm</button>
        Output:
         */}
        {stWalAddress}


        {/* Map for display*/}

          <iframe width="560" height="560" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.56607294082643%2C12.936034981959683%2C77.57194161415102%2C12.938889602289802&amp;layer=mapnik"></iframe>

          

        <button onClick={getLocation} > Get current location </button>
        Lat: {stCurLatitude}
        Longi: {stCurLongitude}
      
      </div>
    </>
  )
}
