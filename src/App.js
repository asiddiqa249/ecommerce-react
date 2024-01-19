import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);

  const onToken = (token) => {
    console.log(token);
    localStorage.setItem("data", JSON.stringify(token));
  };

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    setAmount(parseInt(inputValue, 10) || 0);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="amountInput" >Enter Amount: </label>
        <input
          type="text"
          id="amountInput"
          value={amount}
          onChange={handleAmountChange}
        />
      </div><br/>
      <StripeCheckout
        token={onToken}
        name="Stripe Payment"
        currency="inr"
        amount={amount*100}
        stripeKey="pk_test_51OWf77SAeA3EdM5WJbmV4bvRukCEp5CcKSqLa04vPmaiTzzp8wDODTFDfTWiYigXMbwPCVOUTmGgNTgfnhwg8Tta00rq7biZdx"
      />
    </div>
  );
}

export default App;
