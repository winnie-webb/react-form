import "./css/AirportTransferFormCreditCard.css";
function AirportTransferFormCreditCard(){
    return (
      <section className="section-form-transfer">
        <form className="forms" action="/payments">

      <section className="section-personal-info">
        <h2>Personal Info</h2>
        <div className="personal-info">
        <div className="forms__form email-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          </div>

          <div className="forms__form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" />
          </div>
          </div>
          </section>
<section className="section-checkouts">
<h2>Checkout</h2>

      <div className="checkouts">
          <div className="forms__form ">
          <label htmlFor="name-on-card">Name On Card</label>
          <input type="text" id="name-on-card" name="name-on-card" />
          </div>
  
          <div className="forms__form">
          <label htmlFor="ccn">Card Number</label>
          <input id="ccn" name="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="0000 0000 0000 0000"/>
          </div>
  
          <div className="forms__form">
          <label htmlFor="cvc">CVC Code</label>
          <input id="cvc" name="cvc" type="tel" />
          </div>
  
          <div className="forms__form">
          <label htmlFor="exp">Expiration Date</label>
          <input id="exp" type="month" placeholder="MM/YY"/>
          </div>
  </div>
  </section>
        </form>

        </section>
    )
  }
export default AirportTransferFormCreditCard;