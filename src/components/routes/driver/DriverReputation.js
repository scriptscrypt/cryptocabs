import React from "react";
import logoO from "../../../assets/logos/logoOla.png";
import logoU from "../../../assets/logos/logoUber.jpg";
import logoR from "../../../assets/logos/logoRapido.png";
import logoC from "../../../assets/logos/logo.png";

import { ThemeIcon, RingProgress, Text, Center, Badge, Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

export default function DriverReputation() {
  return (
    <>

      <div className="RideD">
      <div className="Title">
        <h1>Cross-Platform Ratings</h1>
      </div>
      <div className="Stat">
        <div className="box">
          <div className="box-item">
            <img src={logoC} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>8.0</b>
          </div>
        </div>

        <div className="box">
          <div className="box-item">
            <img src={logoO} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>7.7</b>
          </div>
        </div>
        <div className="box">
          <div className="box-item">
            <img src={logoU} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>8.1</b>
          </div>
        </div>
        <div className="box">
          <div className="box-item">
            <img src={logoR} alt="O-rating" />
          </div>
          <div className="box-item">
            <b>7.0</b>
          </div>
        </div>
      </div>
      <div className="Title">
        <h1>Records</h1>
      </div>
      <div className="Track">
        <div className="Track-container">
            <div className="TrackDe">
            <h2> Driver Details</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 40, color: "blue" }]}
              label={
                <Text color="blue" weight={700} align="center" size="xl">
                  40
                </Text>
              }
              />
          </div>
        </div>

        <div className="Track-container">
          <div className="TrackDe">
            <h2> Customer interaction</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 30, color: "blue" }]}
              label={
                  <Text color="blue" weight={700} align="center" size="xl">
                      30
                </Text>
              }
            />
          </div>
        </div>

        <div className="Track-container">
          <div className="TrackDe">
            <h2>Rejection Rate of Driver</h2>
          </div>
          <div className="TrackSt">
            <RingProgress
              sections={[{ value: 80, color: "blue" }]}
              label={
                  <Text color="blue" weight={700} align="center" size="xl">
                  80
                </Text>
              }
              />
          </div>
        </div>
      </div>
    </div>
    <div className="cf"> 
        <Badge radius="sm" size="lg">Reputation Score - 987</Badge>
    </div>
    <div className="">
      
    </div>

    </>
  );
}