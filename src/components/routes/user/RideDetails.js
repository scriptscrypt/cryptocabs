import React, { useRef, useState } from 'react'
import { Autocomplete, Badge, Group, Modal, Rating } from "@mantine/core";
import { Button } from "@mantine/core";
import imgCar1 from "../../../assets/images/imgCar1.png"
import imgCar2 from "../../../assets/images/imgCar2.png"
import imgCar3 from "../../../assets/images/imgCar3.png"
import imgCar4 from "../../../assets/images/imgCar4.png"

import logoLocation from "../../../assets/logos/logoLocation.svg"
import { globalContract, globalSigner, globalEthers, varContractAddress} from '../../GlobalVars';

{/* Location React-leaflet imports*/}
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
  

export default function RideDetails() {


    
    // const [stUser, setStUser] = useState({hex:"", from:"", to:"" })
    const [stWalAddress, setStWalAddress] = useState("0x")

    const [stCurLatitude, setStCurLatitude] = useState("0")
    const [stAmount, setStAmount] = useState("0.0032")
    const [stCurLongitude, setStCurLongitude] = useState("0")
    const [opened, setOpened] = useState(false);

    const refFrom = useRef("FromDefault") 
    const refTo = useRef("ToDefault")
    const [stOpenedErr, setStOpenedErr] = useState(false)
    const [ stErr, setStErr] = useState("")
    const [stRatingValue, setStRatingValue] = useState(0);
    function fnGetPrice (){
      setStAmount((Math.random() * 0.01 + 0.001 ).toFixed(4) )
      console.log(stAmount)
    }

    const refSignature = useRef("")

    async function fnConfirmRide(){
        try{
          refSignature.current = await globalSigner.signMessage(`Confirm ride with the amount : ${stAmount}`)  
          if(refSignature.current){
            setOpened(true)
          }
        }
        
        catch(err){
          console.log(err)
          //Catch Errors or add other features
        }

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

    {/* Ethersjs transaction initiation */}
    const [tx, setTx] = useState("0x")

      const fnSendEth = async () =>{
        try{
          setTx(await globalSigner.sendTransaction({
                  to: varContractAddress,
                  value: globalEthers.utils.parseEther(stAmount)})
          )
          console.log(tx)
        }
        catch(err){
          console.log(err)
          setStErr(err)
          //Catch Errors or add other features
          setStOpenedErr(true)

        }
      }


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
          <Autocomplete  placeholder="From" ref={refFrom} data={["Nr colony", "Nagasandra", "Whitefield", "Yelahanka","Jalahalli"]}
          />
        </div>

        <div className="p8">
          <Autocomplete placeholder="Destination" ref={refTo} data={["Nr colony", "Nagasandra", "Whitefield", "Yelahanka","Jalahalli"]}
          />
        </div>

          {/* <h3>Select Vehicle</h3> */}
          <div className="Vehicle">
            <div className="img1">
              {/* <img onClick={fnGetPrice} src={imgCar3} alt="auto" className='img160 img1'  /> */}
            </div>
            <div className="img1">
              <img onClick={fnGetPrice} src={imgCar2} alt="car" className='img160 img1' />
            </div>
            <div className="img1">
              <img onClick={fnGetPrice} src={imgCar1} alt="car" className='img160 img1' />
            </div>
            <div className="img1">
              <img onClick={fnGetPrice} src={imgCar4} alt="car" className='img160 car4 img1' />
            </div>
          </div>
   
      <div className="rf jusSpc">

            <div className="p8">
              <Button size="xs" variant="light" onClick={getLocation}> <img src={logoLocation} alt="" /></Button>
            </div>

            <div className="p8">
               <Badge size='lg' radius={"sm"}>  For later?  </Badge>
            </div>
      </div>

        <div className="">
          <Button m ="md" radius="md" size="md" onClick={fnConfirmRide}> {`Book ride for ${stAmount}`} </Button>
        </div>
      </div>

      <div>
        {/* Map for display*/}
        
        <iframe className="Map"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=77.56607294082643%2C12.936034981959683%2C77.57194161415102%2C12.938889602289802&amp;layer=mapnik"></iframe>

      {/* React - leaflets */}
        {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    </div>

    {/* Modal for confirmation */}
    <Modal opened={opened} onClose={() => setOpened(false)} title="Confirm ride" >
      <div className="cf">

      <div className="m8 cf">
        Transaction Processed on Ethereum Contract : 

        <Badge m="sm" color={"orange"} size='xl' radius={"sm"}>
            {`${(globalContract.address).slice(0,6)}...${(globalContract.address).slice(60, 64)}`}
        </Badge>
      </div>
      <div className="cf">
        The Transaction hash is : 
        <Badge m="sm" size='xl' radius={"sm"}>
          {tx.hash && `${(tx.hash).slice(0,6)}...${(tx.hash).slice(62, 66)}`}
        </Badge>
      </div>
      <div className="">
        Please rate the driver :

        <Rating m="sm" defaultValue={2} value={stRatingValue} onChange={setStRatingValue}  />
      </div>

        <Group m="sm">
          <Button onClick={()=> setOpened(false)}>Cancel ride</Button>
          <Button onClick={fnSendEth}>Pay Now</Button>
          <a target="_blank" href={`https://goerli.etherscan.io/tx/${tx.hash}`}> Verify on etherscan </a>
          
        </Group>

      </div>
    </Modal>

  {/* Error modal */}

  <Modal opened={stOpenedErr} onClose={() => setStOpenedErr(false)} title="Error" >
        {stErr.message}

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
