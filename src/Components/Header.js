import React from 'react'
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">

    <div className="header-top">
    <div className="container">
    <div className="header-top-wrapper">
    <div className="header-top-left">
    <div className="header-top-contact">
    <ul>
    <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#1f767179705f7a677e726f737a317c7072"><i className="far fa-envelopes"></i>
    <span className="__cf_email__" data-cfemail="96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb">[email&#160;protected]</span></a></li>
    <li><a href="tel:+21236547898"><i className="far fa-phone-volume"></i> +9999599840</a>
    </li>
    <li><a href="#"><i className="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)</a></li>
    </ul>
    </div>
    </div>
    <div className="header-top-right">
    <div className="header-top-link">
    <a href="#"><i className="far fa-arrow-right-to-arc"></i> Login</a>
    <a href="#"><i className="far fa-user-vneck"></i> Register</a>
    </div>
    <div className="header-top-social">
    <span>Follow Us: </span>
    <a href="#"><i className="fab fa-facebook"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="main-navigation">
    <nav className="navbar navbar-expand-lg">
    <div className="container position-relative">
    <a className="navbar-brand" href="index.html">
    <img src="../assets/img/logo/logo1.png" alt="logo"/>
    </a>
    <div className="mobile-menu-right">
    <div className="search-btn">
    <button type="button" className="nav-right-link"><i className="far fa-search"></i></button>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-mobile-icon"><i className="far fa-bars"></i></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="main_nav">
    <ul className="navbar-nav">
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle active" href="#" >Home</a>
    {/* <ul className="dropdown-menu fade-down">
    <li><a className="dropdown-item" href="index.html">Home Page 01</a></li>
    <li><a className="dropdown-item" href="index-2.html">Home Page 02</a></li>
    <li><a className="dropdown-item" href="index-3.html">Home Page 03</a></li>
    </ul> */}
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/about">About</a></li>
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/inventoryGrid" >Inventory</a>
    {/* <ul className="dropdown-menu fade-down">
    <li><a className="dropdown-item" href="inventory-grid.html">Inventory Grid</a></li>
    <li><a className="dropdown-item" href="inventory-list.html">Inventory List</a></li>
    <li><a className="dropdown-item" href="inventory-single.html">Inventory Single</a></li>
    </ul>  */}
    </li>
   
    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
    </ul>
    <div className="nav-right">
    {/* <div className="search-btn">
    <button type="button" className="nav-right-link"><i className="far fa-search"></i></button>
    </div>
    <div className="cart-btn">
    <a href="#" className="nav-right-link"><i className="far fa-cart-plus"></i><span>0</span></a>
    </div>
    <div className="nav-right-btn mt-2">
    <a href="#" className="theme-btn"><span className="far fa-plus-circle"></span>Add Listing</a>
    </div> */}
    {/* <div className="sidebar-btn">
    <button type="button" className="nav-right-link"><i className="far fa-bars-sort"></i></button>
    </div> */}
    </div>
    </div>
    
    <div className="search-area">
    <form action="#">
    <div className="form-group">
    <input type="text" className="form-control" placeholder="Type Keyword..."/>
    <button type="submit" className="search-icon-btn"><i className="far fa-search"></i></button>
    </div>
    </form>
    </div>
    
    </div>
    </nav>
    </div>
    </header>
  )
}

export default Header;
