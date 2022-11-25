import { Button, Input } from '@mantine/core';
import React, {useState, useRef, useEffect} from 'react'
import { globalWeb3StorageToken } from "../../GlobalVars"
import { Web3Storage } from 'web3.storage';



export default function UserProfile() {
  var client = ""

  const [stCID, setStCID] = useState("")
  const [stRes, setStRes] = useState("")
  const [stFile, setStFile] = useState("")
  const refMetaInfo = useRef("")

  useEffect(()=>{
    // Construct with token and endpoint
    // initializing the client 
    client = new Web3Storage({ token: globalWeb3StorageToken })
  })

  const fnPutFile = async () =>{
        
    {/* Selects file with input type - file */}
    const fileInput = document.querySelector('#idMetaInfo');

    // Pack files into a CAR and send to web3.storage
    setStCID( await client.put(fileInput.files, {
    name: "Nothing",
    maxRetries: 10,
    })) 

    fnGetFile();   
  }
  const fnGetFile = () =>{
        
    console.log(`client.get method - ${ client.get(stCID)}`)
    setStRes( client.get(stCID)) // Web3Response
    
    setStFile( stRes.files())
    console.log(`.files method - ${ client.get(stCID)}`)
  }


  return (
    <>
      <div className=""> 
        <input placeholder='Enter metadata' id='idMetaInfo' ref={refMetaInfo} type="text" />

        <Input placeholder='Browse' type="file" />
         {/* IPFS path prefix format*/}
         <a href={`https://ipfs.io/ipfs/${stCID}`} target="_blank">Verify - IPFS</a> <br />

        <Button onClick={fnPutFile}>Set Profile</Button>

      </div> 
    </>
  )
}