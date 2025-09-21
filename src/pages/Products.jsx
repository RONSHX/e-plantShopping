import Header from '../components/Header';
import products from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function Products() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className="container" style={{ padding: '1rem' }}>
        <h1>Our Plants</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}
        >
          {products.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
                background: '#fff'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                {product.category}
              </p>
              <button
                onClick={() => dispatch(addToCart(product))}
                style={{
                  background: '#2e7d32',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
