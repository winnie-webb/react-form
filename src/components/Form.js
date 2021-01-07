import React, {useState,useEffect} from "react";
import AirportTransferForm from "./AirportTransferForm";
import ToursForm from "./ToursForm";
import "./css/base.css";
import "./css/Form.css";
function FormComponent () { 
const urlParams = new URLSearchParams(window.location.search);
const selectedForm = urlParams.get('selectedForm');

const [currentAirportTransfer,setCurrentAirportTransfer] = useState("switch-forms__form");
const [currentToursForm,setCurrentToursForm] = useState("switch-forms__form");
const [CurrentForm, setCurrentForm] = useState();

function toggleToAirportTransferForm() {
  setCurrentAirportTransfer("switch-forms__form current-form");
  setCurrentToursForm("switch-forms__form");
}
function toggleToToursForm() {
  setCurrentAirportTransfer("switch-forms__form");
  setCurrentToursForm("switch-forms__form current-form");
}
const isSelectedFormTours = selectedForm === "tours";

useEffect(() => {

  if(isSelectedFormTours){
    toggleToToursForm();
    setCurrentForm(<ToursForm />);
  }
  else {
    toggleToAirportTransferForm();
    setCurrentForm(<AirportTransferForm />);
  }

},[isSelectedFormTours])


  
    return (
      <>
      <section className="form-components">
        <div className="switch-forms">
          <div className={currentAirportTransfer} onClick= {() => {
            setCurrentForm(<AirportTransferForm />);
            toggleToAirportTransferForm();
          }}>Book Airport Transfer</div>
          <div className={currentToursForm} onClick={() => {
            setCurrentForm(<ToursForm />);
            toggleToToursForm();
          }}>Book Tours</div>
        </div>
      {CurrentForm}
      </section>
      </>
    )
  }
  export default FormComponent;


  // Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  // Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>