import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Row } from 'reactstrap'
import './header.scss'

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "blog",
    display: "Blog",
  },
];

const Header = () => {



  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className='header'>
      <div className="header_content">
        <Container maxWidth='xxl'>
          <div className="top_header">
            <div className="left-icons">
              <i class="ri-facebook-fill"></i>
              <i class="ri-twitter-fill"></i>
              <i class="ri-google-fill"></i>
              <i class="ri-pinterest-fill"></i>
              <i class="ri-instagram-line"></i>
              <div className="call">
                <p>Call: <span>+01 23456789</span></p>
              </div>
            </div>
            <select className="nav-link border-0 ml-1 mr-2"
              aria-label="Default select example" >
              <option value="en" className="lang">Eng</option>
              <option value="ru" className="lang">Rus</option>
              <option value="de" className="lang">Deu</option>
            </select>
          </div>
        </Container>

        <Container maxWidth='xxl'>
          <div className="middle_header">
            <div className="burger_menu">
              <i class="ri-menu-2-line"></i>
            </div>
            <div className="left-logo">
              <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/bike-logo-retina_500x.png?v=1613676685" alt="" />
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                      {item.display}
                    </NavLink>
                    <i class="ri-arrow-down-s-line"></i>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
            <div className="nav_icons">
              <span className='search_icon'><i class="ri-search-line"></i></span>
              <span className='user_icon'><i class="ri-user-line"></i></span>
              <span className="fav_icon">
                <i class="ri-heart-3-line"></i>
                <span className="badge">1</span>
              </span>
              <span className='shop_icon'><i class="ri-shopping-cart-line"></i></span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header