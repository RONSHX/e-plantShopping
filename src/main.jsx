import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import your pages
import Landing from './pages/Landing';
import Products from './pages/Products';
import Cart from './pages/Cart';

// Optional: global styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Product listing page */}
          <Route path="/products" element={<Products />} />

          {/* Shopping cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* Redirect any unknown route back to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
