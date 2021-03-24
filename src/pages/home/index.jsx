import React from 'react';
import Search from '../../components/Search';

const HomePage = () => {
    return <div>
 <div class="row">
  <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <Search></Search>
            </div>
        </div>
        </div></div> 
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
}

export default HomePage;