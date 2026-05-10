import { useState } from "react";

function Checkout({ cart = [] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function placeOrder() {
    alert(`Thank you for your order, ${name}!`);
  }

  return (
    <div className="cart-page">

      <h1>Checkout</h1>

      {/* CUSTOMER INFORMATION */}
      <div className="checkout-form">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

      </div>

      {/* PAYMENT INFORMATION */}
      <h2>Payment Information</h2>

      <div className="checkout-form">

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <input
          type="text"
          placeholder="MM/YY"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
        />

        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />

      </div>

      {/* ORDER SUMMARY */}
      <h2>Order Summary</h2>

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}

      {/* ITEM COUNT */}
      <p>Items: {cart.length}</p>

      {/* TOTAL */}
      <h2 className="cart-total">
        Total: ${total.toFixed(2)}
      </h2>

      {/* PLACE ORDER BUTTON */}
      <button
        className="checkout-btn"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>
  );
}

export default Checkout;