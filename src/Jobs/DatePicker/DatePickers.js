import React,{useState} from 'react'
import Calendar from "../../assests/calendar 1.png"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css"

const DatePickers=()=> {
  const [startDate,setstartDate] = useState(null)
  const [endDate,setendDate] = useState(null)
  console.log(startDate)
  console.log(endDate)

  return (
    <div className="datepicker">
       <div className="datepicker1">
       <p>Start Date</p>
          <DatePicker  className="datepicker1" selected={startDate} onChange={(date)=>setstartDate(date)} 
          placeholderText="MM/DD/YYYY" minDate={new Date()} showYearDropdown scrollableMonthYearDropdown/> 
          </div>   
      <div className="datepicker1__img">
          <img  src={Calendar}/>
      </div>
      <div className="datepicker2">
      <p>End Date</p>
          <DatePicker selected={endDate} onChange={(date)=>setendDate(date)}
           placeholderText="MM/DD/YYYY" minDate={new Date()} showYearDropdown/>
     </div>
     <div className="datepicker2__img">
         <img src={Calendar}/>
     </div>
  </div>
  )
}
export default DatePickers
