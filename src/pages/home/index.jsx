import React from 'react';
import ContactUs from '../../components/ContactUs';
import FAQ from '../../components/FAQ';
import Search from '../../components/Search';


const HomePage = () => {
  return <div>
    
    <div class="row">
      <div class="col-sm-12 p-0">
        <Search></Search>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12 p-2">
        <FAQ />
      </div>
      <div class="col-md-6 col-sm-12 p-2">
        <ContactUs />
      </div>
    </div>
  </div>
}

export default HomePage;