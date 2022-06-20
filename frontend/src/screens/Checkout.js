import React, { useState } from 'react'
import "./Checkout.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Checkout(props) {
    const location = useLocation()
    const { money } = location.state
    console.log(typeof(money))
    var mon=parseInt(money);
    const [show, setShow] = useState(false);
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);
 // creates a paypal order
 const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Items",
            amount: {
              currency_code: "USD",
              value: mon,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    // <div className='op-op'>
    <PayPalScriptProvider options={{ "client-id": "test" }}>
                     <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
           
         />

       </PayPalScriptProvider>
      //  </div>
  )
}

export default Checkout