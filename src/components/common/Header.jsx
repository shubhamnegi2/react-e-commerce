import React from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/images/user.svg'
import cartImg from '../../assets/images/cart.svg'
export default function Header() {
    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

            <div className="container">
                <NavLink  className="navbar-brand" to="/">Furni<span>.</span></NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link"  activeClassName="active"  to="/">Home</NavLink>
                        </li>
                        <li><NavLink className="nav-link"  activeClassName="active" to="shop">Shop</NavLink></li>
                        <li><NavLink className="nav-link"  activeClassName="active" to="about">About us</NavLink></li>
                        <li><NavLink className="nav-link"  activeClassName="active" to="services">Services</NavLink></li>
                        <li><NavLink className="nav-link"  activeClassName="active" to="blog">Blog</NavLink></li>
                        <li><NavLink className="nav-link"  activeClassName="active" to="contact">Contact us</NavLink></li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><NavLink className="nav-link" to="#"><img src={userImg}/></NavLink></li>
                        <li><NavLink className="nav-link" to="cart"><img src={cartImg}/></NavLink></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
