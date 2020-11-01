import React from 'react'
import "./Home.css"
import Facilites from '../Facilites/Facilites'
import Nurse from "../Nurse/Nurse"

function Home() {
    return (
        <div>
       
        <h1>Welcome</h1>

        <div className="home">
        <Facilites/>
         <Nurse/>
         </div>
         </div>
    )
}

export default Home
