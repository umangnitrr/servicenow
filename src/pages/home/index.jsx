import React from 'react';
import ContactUs from '../../components/ContactUs';
import FAQ from '../../components/FAQ';
import Search from '../../components/Search';


const HomePage = () => {
  return <div>
    
    <div class="row">
      <div class="col-sm-12 p-5">
        <Search></Search>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 p-5">
        <FAQ />
      </div>
      <div class="col-sm-6 p-5">
        <ContactUs />
      </div>
    </div>
  </div>
}

export default HomePage;