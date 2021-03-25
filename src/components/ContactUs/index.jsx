import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return <div class="card">
    <div class="card-body">
      <h5 class="card-title">Contact Us</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <Link to="/ticket">
        <button className="btn btn-primary">Go somewhere</button>
      </Link>
    </div>
  </div>
}

export default ContactUs;