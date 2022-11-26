import React, {useState} from "react";
import {globalProvider} from "../components/GlobalVars"
import logo from "../assets/logos/logo.png"
import logoHistory from "../assets/logos/logoHistory.svg"
import logoProfile from "../assets/logos/logoProfile.svg"
import logoMeta from "../assets/logos/logoMeta.svg"
import logoWallet from "../assets/logos/logoWallet.svg"
import logoImportToken from "../assets/logos/logoImportToken.png"
import { Button, Group } from "@mantine/core";
import {Link} from "react-router-dom"
import { globalTokenAddress,  } from "../components/GlobalVars";

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

  // Function to import our own token start
const fnImportToken = async () =>{

  const tokenSymbol = 'CC';
  const tokenDecimals = 18;
  
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: globalTokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          // image: tokenImage, // A string url of the token logo
        },
      },
    });
  
    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }
  
}

  // Function to import our own token end

  return (
    <>
    <div className="navWrapper">
      <div className="nav-left">
        <Link to="/home">
          <img src={logo} alt="Logo" className="imgH32"/>
        </Link>
        
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <Link to="/user/previousrides">
            <img src={logoHistory} alt="Transaction histroy" />
          </Link>
        </div>
        <div className="nav-item" title="Connect Wallet">
          <Link to="/user/userprofile">
            <img src={logoProfile}  alt="profile" />
          </Link>
        </div>
        <div onClick={fnConnectWallet} className="nav-item">
          <img src={logoWallet} alt="wallet" />
        </div>
        
        <div onClick={fnImportToken} className="nav-item">
          <img src={logoImportToken} alt="wallet" />
        </div>

        <Group className="nav-item1">

          <div className="nav-sub">
            <img src={logoMeta} alt="metamask" />
          </div>
          <div className="nav-sub">{`${window.localStorage.getItem("keyWalAddress").slice(0,8)}...${window.localStorage.getItem("keyWalAddress").slice(62,64)}`}
          </div>
        </Group>
      </div>
    </div>


    </>
  )
}
