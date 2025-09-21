import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';


export default function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <>
      <Header />
      <main className="container">
        <h1>Your Cart</h1>
        <p>Total items: {totalQuantity}</p>
        <p>Total cost: ${totalAmount.toFixed(2)}</p>

        {items.length === 0 && <p>Your cart is empty.</p>}

        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} width="80" />
            <div className="info">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            </div>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </div>
        ))}

        {items.length > 0 && (
          <div className="cart-actions">
            <button onClick={() => alert('Checkout coming soon!')}>Checkout</button>
            <Link to="/products">Continue Shopping</Link>
          </div>
        )}
      </main>
    </>
  );
}
