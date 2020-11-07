import React,{useState} from 'react'
import Images from "./Images"
import Inputs from "./Inputs"
import "./Application.css"
import BasicInfo from '../BasicInfo/BasicInfo'
import Header from "../Header/Header"

function Application() {
    const [issubmit,setissubmit] = useState(false)

    const submitform = ()=>{
        setissubmit(true)
    }
    return (
        <div >
           {!issubmit ?
             <div >
                      <Header/>
               <div className="application">
                   <Inputs submitform={submitform}/>
                   <Images/>
              </div>
            </div>:<BasicInfo/>
        }
        </div>
    )
}

export default Application;
