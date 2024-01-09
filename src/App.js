import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './App.css';

function App() {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="App">
      <StripeCheckout
        token={onToken}
        name="Stripe Payment"
        currency="inr"
        amount={800}
        stripeKey="pk_test_51OWf77SAeA3EdM5WJbmV4bvRukCEp5CcKSqLa04vPmaiTzzp8wDODTFDfTWiYigXMbwPCVOUTmGgNTgfnhwg8Tta00rq7biZdx"
      />
    </div>
  );
}

export default App;
