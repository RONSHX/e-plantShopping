import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  // Pull the total quantity from the Redux cart slice
  const totalItems = useSelector(state => state.cart.totalQuantity);

  return (
    <header
      style={{
        background: '#2e7d32',
        padding: '1rem',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Logo / Home link */}
      <h2 style={{ margin: 0 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Paradise Nursery
        </Link>
      </h2>

      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>
          Products
        </Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
          Cart 🛒
          <span
            style={{
              background: '#fff',
              color: '#2e7d32',
              padding: '0 6px',
              borderRadius: '8px',
              marginLeft: '4px'
            }}
          >
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}
