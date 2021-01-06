import React from "react";
import AirportTransferForm from "./AirportTransferForm";

function FormComponent () {
   
  
    return (
      <>
      <section className="form-components">
        <div className="switch-form">
          <span>Airport Transfer</span>
          <span>Tours</span>
        </div>
      <AirportTransferForm />
      </section>
      </>
    )
  }
  export default FormComponent;