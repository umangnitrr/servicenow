import React from 'react'
import  './Navbar.css'
import Logo from '../../assets/servicenowlogo.png'
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About</a>
                <a href="#" class="nav-item nav-link">Products</a>
            </div>
            <form className="form-inline ml-auto">
                <input type="text" className="form-control mr-sm-2" placeholder="Search"></input>
                <button type="submit" className="btn btn-outline-light">Search</button>
            </form>
        </div>
    </nav>
        </div>
        

    )
}

export default Navbar
