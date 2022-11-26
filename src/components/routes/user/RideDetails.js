import React, { useRef, useState } from 'react'
import { Autocomplete, Modal } from "@mantine/core";
import { Button } from "@mantine/core";
import imgCar1 from "../../../assets/images/imgCar1.png"
import imgCar2 from "../../../assets/images/imgCar2.png"
import logoLocation from "../../../assets/logos/logoLocation.svg"
import { globalContract } from '../../GlobalVars';

export default function RideDetails() {
    
    // const [stUser, setStUser] = useState({hex:"", from:"", to:"" })
    const [stWalAddress, setStWalAddress] = useState("0x")

    const [stCurLatitude, setStCurLatitude] = useState("0")
    const [stAmount, setStAmount] = useState("1")
    const [stCurLongitude, setStCurLongitude] = useState("0")
    const [opened, setOpened] = useState(false);

    const refFrom = useRef("FromDefault") 
    const refTo = useRef("ToDefault")
    
    function fnGetPrice (){
      setStAmount(Math.floor(Math.random() * 100 + 1))
    }

    function fnConfirmRide(){
      setOpened("true") 
    }
      
    {/* Fetching device location */}
    
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

    {/* Interacting with smart contracts */}


  return (
    <>

    {/* Component - RideDetails.js */}

    <div className="M-container">
      <div className="S-Bar">
        <div className="intro">
          {/* <h1>CRYPT-CABS</h1> */}
        </div>
        <div className="trip">
          <h3>Trip Details</h3>
        </div>

        <div className="p8">
          <Autocomplete  placeholder="From" ref={refFrom} data={["Nr colony", "Nagasandra", "Whitefied", "Anantpur"]}
          />
        </div>

        <div className="p8">
          <Autocomplete placeholder="To" ref={refTo} data={["Nr colony", "Nagasandra", "Whitefied", "Anantpur"]}
          />
        </div>

          {/* <h3>Select Vehicle</h3> */}
          <div className="Vehicle">
            <div className="img1 cf">
              <img onClick={fnGetPrice} src={imgCar1} alt="auto" className='img160 img1'  />
            </div>
            <div className="img1">
              <img onClick={fnGetPrice}  src={imgCar2} alt="car" className='img160 img1' />
            </div>
            <div className="img1">
              <img onClick={fnGetPrice}  src={imgCar2} alt="car" className='img160 img1' />
            </div>
            <div className="img1">
              <img onClick={fnGetPrice}  src={imgCar2} alt="car" className='img160 img1' />
            </div>
          </div>
   
        <div className="">
          <Button onClick={getLocation} > <img src={logoLocation} alt="" /></Button>
        </div>
        <div className="">
          <Button m ="md" radius="md" size="md" onClick={fnConfirmRide}> {`Book ride for ${stAmount}`} </Button>
        </div>
      </div>

      <div>
        {/* Map for display*/}
        
        <iframe  className="Map"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.56607294082643%2C12.936034981959683%2C77.57194161415102%2C12.938889602289802&amp;layer=mapnik"></iframe>

        Lat: {stCurLatitude}
        Longi: {stCurLongitude}

      </div>
    </div>

    {/* Modal for confirmation */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Confirm ride" >
      <div className="cf">

      <div className="">
        Transaction Processed on Ethereum : {globalContract.address}
      </div>
      <div className="">
        {refFrom.current.value} to {refTo.current.value}
      </div>
        
        {stAmount}
    
      </div>
    </Modal>




{/* ---------------------------------------------------------------------- */} 

      {/* <div className=""> */}
        {/* <input type="text" ref = {refFrom} placeholder='From' />
        <input type="text" ref = {refTo} placeholder='To' />
        <button onClick={ls}>Confirm</button>
        Output:
         */}

        {/* Map for display*/}

          {/* <iframe width="560" height="560" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.56607294082643%2C12.936034981959683%2C77.57194161415102%2C12.938889602289802&amp;layer=mapnik"></iframe>

          

        <button onClick={getLocation} > Get current location </button>
        Lat: {stCurLatitude}
        Longi: {stCurLongitude} */}
      
      {/* </div> */}
    </>
  )
}
