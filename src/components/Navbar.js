import React, {useState} from "react";
import {globalProvider} from "../components/GlobalVars"
import logo from "../assets/logos/logo.svg"
import logoHistory from "../assets/logos/logoHistory.svg"
import logoProfile from "../assets/logos/logoProfile.svg"
import logoMeta from "../assets/logos/logoMeta.svg"
import logoWallet from "../assets/logos/logoWallet.svg"
import { Button, Group } from "@mantine/core";
import {Link} from "react-router-dom"

export default function Navbar() {

  const [stWalAddress, setStWalAddress] = useState("0x")
  
  
  {/* Function to connect user's wallet */}

  const fnConnectWallet = async () =>{
      try{
        setStWalAddress(await globalProvider.send("eth_requestAccounts", []))
        window.localStorage.setItem("keyWalAddress", stWalAddress)
        
        }
        catch(err){
          console.log(err)
          //Catch Errors or add other features
          

        }
      }

  return (
    <>
    <div className="navWrapper">
      <div className="nav-left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <Link to="/user/previousrides">
            <img src={logoHistory} alt="histroy" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/user/userprofile">
            <img src={logoProfile} alt="profile" />
          </Link>
        </div>
        <div onClick={fnConnectWallet} className="nav-item">
          <img src={logoWallet} alt="wallet" />
        </div>

        <Group className="nav-item1">

          <div className="nav-sub">
            <img src={logoMeta} alt="metamask" />
          </div>
          <div className="nav-sub">{window.localStorage.getItem("keyWalAddress").slice(0,8)}</div>
        </Group>
      </div>
    </div>


    </>
  )
}
