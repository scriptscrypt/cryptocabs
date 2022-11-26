import React from "react";
import { Button, Divider } from "@mantine/core";
import "../../src/App.css";
import { Link } from "react-router-dom";
import imgLanding from "../assets/images/imgLanding.jpg"
import logo from "../assets/logos/logo.png"


function LaunchPage() {

    
    return (<>

        {/* Navbar Start*/}
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="logo" className="imgH32" />
        {/* <h3>Logo</h3> */}
      </div>

      <div className="launch">
        <div className="linkDivLaunch mp8 rf">
            <Link className="linkLaunch" to="/home" >Launch App</Link>
        </div>
      </div>
    </div>
    {/* Navbar Ends*/}


    {/* Promo Image starts*/}
    
    <img src={imgLanding} className="home" alt="Landing Image" />
    
    
    {/* Promo Image ends*/}
</> );
}
export default LaunchPage;