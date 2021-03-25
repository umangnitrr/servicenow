import React from 'react';
import Logo from '../../assets/SupremoLOGOwhite.png'
import NavStyle  from '../Nav/Nav.css'
//import from 'Nav.css';

const Nav = () => {

    return (

        <div class="d-flex bg-dark flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow bgcolor" >
            
            <div class="my-0 mr-md-auto font-weight-normal">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="30" height="40" width="150" alt=""></img>
                </a>
            </div>

                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-white" href="#">Assets</a>
                    <a class="p-2 text-white" href="#">Products</a>
                    <a class="p-2 text-white" href="#">Support</a>
                    <a class="p-2 text-white" href="#">Pricing</a>
                </nav>
                <a class="btn btn-outline-primary btn-outline" href="#">Sign up</a>
            </div>


    )
}

export default Nav;