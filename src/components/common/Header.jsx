import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import userImg from '../../assets/images/user.svg'
import cartImg from '../../assets/images/cart.svg'
import CartContex from '../../contex/CartContex'
export default function Header() {
    const {cart} = useContext(CartContex)
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
                            <NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`}  to="/">Home</NavLink>
                        </li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`}    to="shop">Shop</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`} to="about">About us</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`} to="services">Services</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`} to="blog">Blog</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive? "active": ''}`} to="contact">Contact us</NavLink></li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><NavLink className="nav-link" to="/login"><img src={userImg}/></NavLink></li>
                        <li><NavLink className="nav-link position-relative" to="cart"><img src={cartImg}/><span className='cartCount'>{cart.ids.length}</span></NavLink></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
