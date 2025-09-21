import { Link } from 'react-router-dom';
import './landing.css'; // we’ll make this file next for styling

export default function Landing() {
  return (
    <div className="landing-hero">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>Bringing fresh air and calm to your home with hand‑picked houseplants.</p>
        <Link className="btn" to="/products">Get Started</Link>
      </div>
    </div>
  );
}
