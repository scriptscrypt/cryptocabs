import React from "react";
import logo from "../assets/logos/logo.svg"
import logoHistory from "../assets/logos/logoHistory.svg"
import logoProfile from "../assets/logos/logoProfile.svg"
import logoMeta from "../assets/logos/logoMeta.svg"
import logoWallet from "../assets/logos/logoWallet.svg"

export default function Navbar() {
  

  return (
    <>
    <div className="navWrapper">
      <div className="nav-left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <img src={logoHistory} alt="histroy" />
        </div>
        <div className="nav-item">
          <img src={logoProfile} alt="profile" />
        </div>
        <div className="nav-item">
          <img src={logoWallet} alt="wallet" />
        </div>
        <div className="nav-item1">

          <div className="nav-sub">
            <img src={logoMeta} alt="metamask" />
          </div>
          <div className="nav-sub">0x99....9A9</div>
        </div>
      </div>
    </div>


    </>
  )
}
