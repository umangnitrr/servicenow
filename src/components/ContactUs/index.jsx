import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/ContactUs/ContactUs.css'
const ContactUs = () => {
  return <div class="card">
    <div class="card-body">
      <h4 class="card-title heading-txt-color">Contact Us</h4>
      <h6 class="card-subtitle mb-2  text-muted">Want to reach our  support team?</h6>

      <p class="card-text"> Please email us at support@supremofinancials.com or call us at 1-(800)-100-0000 (Monday – Friday, 9:00 am – 5:00 pm Pacific Standard Time)</p>



    </div>
    <div class="card-body  mt-2">
      <h5 class="card-text font-weight-bold heading-txt-color">Still Have a Question?</h5>

      <p class="card-text"> If you still haven’t found your answer from our Help Center, please log a ticket by filling out our form and we’ll get back to you shortly.</p>



    </div>
    <div class="card-body text-center">
      <Link to="/ticket" className="text-center">
        <button className="btn btn-primary supremo-btn mt-minus-5">Log Ticket</button>
      </Link>
    </div>

  </div>
}

export default ContactUs;