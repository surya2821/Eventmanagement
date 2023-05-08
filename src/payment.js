import payment from "./payment.js";


function Payment() {
    return (
      <div>
      <style dangerouslySetInnerHTML={{__html: "\n    *{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody{\n  background-color: #000000;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.wrapper{\n  background-color: #fff;\n  width: 500px;\n  padding: 25px;\n  margin: 25px auto 0;\n  box-shadow: 0px 0px 20px rgba(0,0,0,0.5);\n}\n.wrapper h2{\n  background-color: #000000;\n  color: #7ed321;\n  font-size: 24px;\n  padding: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  border: 1px dotted #333;\n}\nh4{\n  padding-bottom: 5px;\n  color: #7ed321;\n}\n.input-group{\n  margin-bottom: 8px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding: 5px 0;\n}\n.input-box{\n  width: 100%;\n  margin-right: 12px;\n  position: relative;\n}\n.input-box:last-child{\n  margin-right: 0;\n}\n.name{\n  padding: 14px 10px 14px 50px;\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 1px solid #00000033;\n  outline: none;\n  letter-spacing: 1px;\n  transition: 0.3s;\n  border-radius: 3px;\n  color: #333;\n}\n.name:focus, .dob:focus{\n  -webkit-box-shadow:0 0 2px 1px #7ed32180;\n  -moz-box-shadow:0 0 2px 1px #7ed32180;\n  box-shadow: 0 0 2px 1px #7ed32180;\n  border: 1px solid #7ed321;\n}\n.input-box .icon{\n  width: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  color: #333;\n  background-color: #f1f1f1;\n  border-radius: 2px 0 0 2px;\n  transition: 0.3s;\n  font-size: 20px;\n  pointer-events: none;\n  border: 1px solid #00000033;\n  border-right: none;\n}\n.name:focus + .icon{\n  background-color: #7ed321;\n  color: #fff;\n  border-right: 1px solid #7ed321;\n  border: none;\n  transition: 1s;\n}\n.dob{\n  width: 30%;\n  padding: 14px;\n  text-align: center;\n  background-color: #fcfcfc;\n  transition: 0.3s;\n  outline: none;\n  border: 1px solid #c0bfbf;\n  border-radius: 3px;\n}\n.radio{\n  display: none;\n}\n.input-box label{\n  width: 50%;\n  padding: 13px;\n  background-color: #fcfcfc;\n  display: inline-block;\n  float: left;\n  text-align: center;\n  border: 1px solid #c0bfbf;\n}\n.input-box label:first-of-type{\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-right: none;\n}\n.input-box label:last-of-type{\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.radio:checked + label{\n  background-color: #7ed321;\n  color: #fff;\n  transition: 0.5s;\n}\n.input-box select{\n  display: inline-block;\n  width: 50%;\n  padding: 12px;\n  background-color: #fcfcfc;\n  float: left;\n  text-align: center;\n  font-size: 16px;\n  outline: none;\n  border: 1px solid #c0bfbf;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.input-box select:focus{\n  background-color: #7ed321;\n  color: #fff;\n  text-align: center;\n}\nbutton{\n  width: 100%;\n  background: transparent;\n  border: none;\n  background: #7ed321;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  font-size: 16px;\n  transition: all 0.35s ease;\n}\nbutton:hover{\n  cursor: pointer;\n  background: #5eb105;\n}\n  " }} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Payment Form</title>
      <link href="paymentform.css" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link rel="stylesheet" href="style.css" />
      <div className="wrapper">
        <h2>Payment Form</h2>
        <form method="POST">
          <h4>Account</h4>
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" required className="name" />
              <i className="fa fa-user icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Nick Name" required className="name" />
              <i className="fa fa-user icon" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input type="email" placeholder="Email Adress" required className="name" />
              <i className="fa fa-envelope icon" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <h4> Date of Birth</h4>
              <input type="text" placeholder="DD" className="dob" />
              <input type="text" placeholder="MM" className="dob" />
              <input type="text" placeholder="YYYY" className="dob" />
            </div>
            <div className="input-box">
              <h4> Gender</h4>
              <input type="radio" id="b1" name="gendar" defaultChecked className="radio" />
              <label htmlFor="b1">Male</label>
              <input type="radio" id="b2" name="gendar" className="radio" />
              <label htmlFor="b2">Female</label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <h4>Payment Details</h4>
              <input type="radio" name="pay" id="bc1" defaultChecked className="radio" />
              <label htmlFor="bc1"><span><i className="fa fa-cc-visa" /> Credit Card</span></label>
              <input type="radio" name="pay" id="bc2" className="radio" />
              <label htmlFor="bc2"><span><i className="fa fa-cc-paypal" /> Paypal</span></label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input type="tel" placeholder="Card Number" required className="name" />
              <i className="fa fa-credit-card icon" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input type="tel" placeholder="Card CVC" required className="name" />
              <i className="fa fa-user icon" />
            </div>
            <div className="input-box">
              <select>
                <option>01 jun</option>
                <option>02 jun</option>
                <option>03 jun</option>
              </select>
              <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <button type="submit">PAY NOW</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    );
  }
  export default Payment;