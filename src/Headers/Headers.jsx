import React from 'react'
import './Headers.css'
import User_2 from "../Icon/User_2.png";
import { stack as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
export const MainHeader = () => {
  return (
    <div className="passenger_header">
        <Menu>
        <NavLink className="menu-item nav-caro" to="/passenger-login">
          CarO
        </NavLink>
        <NavLink className="menu-item" to="/passenger-book-now">
          Book Now
        </NavLink>
        <NavLink className="menu-item" to="/passenger-book-prev-list">
          Previous Bookings
        </NavLink>
        <NavLink className="menu-item" to="/passenger-login">
          About
        </NavLink>
        <NavLink className="menu-item" to="/passenger-login">
          Account
        </NavLink>
        <NavLink className="menu-item" to="/">
          Logout
        </NavLink>
        </Menu>
      <div className='nl-phead'>
        <div></div>
        <div className='h-caro mh-user'>CarO</div>
        <div className="icon"><img className='user_icon ' src={User_2} alt="" /></div>
            </div>
      </div>

  )
}

export const LoginHeader =()=>{

  return (
    <div className="passenger_header">
    <div className='nl-phead'>
        <div></div>
        <div className='h-caro'>CarO</div>
        <div></div>
    </div>

    </div>
  )
}