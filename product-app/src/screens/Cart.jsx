import { Link } from "react-router-dom";

function Cart({ cart = [], setCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function removeItem(indexToRemove) {
    const newCart = cart.filter(
      (item, index) => index !== indexToRemove
    );

    setCart(newCart);
  }

  return (
    <div className="cart-page">

      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

          {cart.map((item, index) => (
            <div className="cart-item" key={index}>

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </div>
          ))}

          <hr />

          <h2 className="cart-total">
            Total: ${total.toFixed(2)}
          </h2>

          {/* CHECKOUT BUTTON */}
          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>

        </>
      )}

    </div>
  );
}

export default Cart;