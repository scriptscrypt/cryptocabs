import React from "react";
import { Button } from "@mantine/core";
import mm from "./../../../assets/logos/logoMetamask.png";
import "./user.css";
import ethimg from "../../../assets/logos/logoEth.png"
import Navbar from "../../Navbar";
import "../../../App.css"

export default function User() {
  return (
    <>
    <Navbar/>
    <div className="Maindiv ">
      <div className="FSB rf">
        <div className="userpic"></div>
        <div className="alligning">
        <div className="dets rf ">
          <div className="Image">
            <img src={mm} alt="Loading" />
          </div>
          <div className="Address">{`${window.localStorage.getItem("keyWalAddress").slice(0,5)}...${window.localStorage.getItem("keyWalAddress").slice(32,36)}`}</div>
        </div>
        <div className="opts">
          <Button id="Swallet" color="indigo" radius="sm" size="xs">
            Switch Wallet
          </Button>
          <Button id="X" color="orange" radius="sm">
            X
          </Button>
        </div>
        </div>
      </div>
      <div className="SSB">
        <div className="LB">
        <div className="WB">
          <h3>Wallet Balance</h3>
        </div>
        <div className="ethimage">
          <img src={ethimg} alt="ethimage" />
          <p >
            0.023 ETH
          </p>
        </div>
        </div>
      <div className="RB">
      <Button color="indigo" radius="sm">
      Import Funds
    </Button>
      </div>
      </div>
    </div>
    </>
  );
}