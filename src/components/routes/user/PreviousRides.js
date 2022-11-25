import React, { useEffect, useRef, useState } from 'react'
import { Table } from '@mantine/core'


export default function PreviousRides() {

    // const [stWalAddress, setStWalAddress] = useState("0x")
    const refWalAddress = useRef("")
    const contractAddress = "0xAc40c9C8dADE7B9CF37aEBb49Ab49485eBD3510d"

    useEffect(()=>{
        refWalAddress.current = window.localStorage.getItem("keyWalAddress").toString()
        console.log("In Previous rides - ", refWalAddress.current)

    }, [refWalAddress])

    // Table component start - mantine.dev
    const elements = [
      { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
      
    ]

    const rows = elements.map((element) => (
      <tr key={element.name}>
        <td>{element.position}</td>
        <td>{element.name}</td>
        <td>{element.symbol}</td>

      </tr>
    ));
    // Table component end

  return (
    <> 
    Component - PreviousRides.js
     <div className="">
        {refWalAddress.current.value}

    {/* Table component Boilerplate Html start*/}
    <Table>
      <thead>
        <tr>
          <th>From Account</th>
          <th>Ride Fare</th>
          <th>Ride Status</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    {/* Table component Boilerplate Html end*/}

  {/* From contract global variables*/}    
    

    </div> 
    </>
  )
}
