import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/SupremoLOGOwhite.png'
import '../Nav/Nav.css'

const Nav = () => {

    return (

        <div class="d-flex bg-dark flex-column flex-md-row align-items-center p-3 px-md-4  border-bottom box-shadow bgcolor" >

            <div class="my-0 mr-md-auto font-weight-normal">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} width="150" height="40" alt="Company logo" />
                </Link>
                
            </div>

            <nav class="my-2 my-md-0 mr-md-3">

                <a class="p-2 text-white" href="#">Assets</a>
                <a class="p-2 text-white" href="#">Products</a>
                <a class="p-2 text-white" href="#">Support</a>
                <a class="p-2 text-white" href="#">Pricing</a>
            </nav>
            <a class="btn  btn-outline" href="#">Sign up</a>
        </div>


    )
}

export default Nav;