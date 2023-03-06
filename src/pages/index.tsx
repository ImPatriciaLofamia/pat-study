import React from "react"
import Button from "./components/Button"
import GreetUser from "./components/GreetUser"
import NavBarSide from "./components/NavBarSide"
import ReactToggle from "./components/ReactToggle"
import data from "./Data.Service/data"

export default function Home() {
  return (
    <div>
      <Button/>
      <GreetUser name='Pat'/>
      <div>
        <NavBarSide/>
      </div>
      <ReactToggle> React Toggle</ReactToggle>
      <div className="text-justify">
        {data.animalData.map( animal => 
          <div>
            <ul>
              <li className="text-black text-6xl">
                {animal.animalName.toUpperCase()}
              </li>
              <li className=" text-gray-500">Classification: {" "}
                {animal.animalClass }
              </li>
              <li>Population: {" "}
              <div className="text-red-500">{animal.population}</div>
                
              </li>
              <li>
                {animal.description}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
