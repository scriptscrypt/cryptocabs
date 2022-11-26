import React from "react";
import { Link } from "react-router-dom"
import { Card, Image } from "@mantine/core";
import imgUser from "../assets/images/imgUser.png"
import imgDriver from "../assets/images/imgDriver.png"
export default function Home() {

  return (
    <>
    <div className="card-container">
      <div className="card-collect">
        <h1>Who are you ?</h1>
      </div>
      <div className="card-collect">
        <div className="card">
          <Card shadow="sm" p="lg" radius="xl" withBorder>
            <Card.Section >
            <Link to="/user/auth">
                {/* User Image here */}
                <Image
                  src={imgUser}
                  height={300}
                  alt="User"
                  />
            </Link> 
            </Card.Section>
          </Card>
        </div>

        <div className="card">
          <Card shadow="sm" p="lg" radius="xl" withBorder>
            <Card.Section >
            <Link to="/driver/auth">    
                {/* Driver image here */}
                <Image
                  src={imgDriver}
                  height={300}
                  alt="Driver"
                  />
            </Link>
            </Card.Section>
          </Card>
        </div>
      </div>
    </div>
</>
  );
}