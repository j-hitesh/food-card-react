import { useContext } from 'react';
import './Cart.css';
import { Context } from '../../components/context/Context';

const Cart = () => {
  const { food_list, cartItem, removeCart, getTotalCartAmount } = useContext(Context);

  if (getTotalCartAmount() === 0) {
    return (
      <div className="no-cart">
        <h2>Your Cart Is Empty</h2>
        <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
      </div>
    );
  }

  return (
    <div className='cart'>
      <div className="cart-hide">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-item-title">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>₹{item.price * cartItem[item._id]}</p>
                    <p className='croos' onClick={() => removeCart(item._id)}>X</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{25}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{getTotalCartAmount() + 25}</b>
              </div>
            </div>
            <button>Proceed to pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
