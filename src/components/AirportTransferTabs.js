import React, { useState } from "react";
import  AirportTransferForm  from "./AirportTransferForm";
import PaypalForm  from "./PaypalForm";
function AirportTransferTabs(){
    const [CurrentForm,setForm] = useState(<AirportTransferForm />);
    const [currentCC,setCurrentCC] = useState("current");
    const [currentPaypal,setCurrentPaypal] = useState();
    return (
        <>
<div className="switch-tab">
        <span className={currentCC} onClick={() => {
          setForm(<AirportTransferForm />);
          setCurrentCC("current");
          setCurrentPaypal("");
        }}>Credit Card</span>
        <span className={currentPaypal} onClick= {() => {
          setCurrentCC("");
          setCurrentPaypal("current");
          setForm(<PaypalForm />)
  
      }}>Paypal</span>
      </div>
      {CurrentForm}

      </>
    )
    }
    export default AirportTransferTabs;