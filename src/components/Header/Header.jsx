import { Container } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './header.scss'
import { setIsCartOpen } from '../../redux/state/cartSlice'
import DarkMode from './DarkMode';
import LanguageFlags from './LanguageFlags';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Grid, IconButton, Stack } from '@mui/material';
import { setIsLoginOpen } from '../../redux/state/loginSlice';


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
    path: "blog",
    display: "Blog",
  },
 
];


const Header = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const headerRef = useRef(null);
  const { t } = useTranslation(["header"])
  const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <>
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
                  <p>{t("Call")}: <span>+01 23456789</span></p>
                </div>
              </div>
              <div className="right_controllers">
                <LanguageFlags />
                <DarkMode />
              </div>
            </div>
          </Container>

        </div>
      </header>
      <header className="sticky_header" ref={headerRef} >
        <Container maxWidth='xxl'>
          <div className="middle_header">
            <div className="burger_menu_icon">
              <i class="ri-menu-2-line"></i>
            </div>
            <div className="left-logo">
              <h1>Elessi</h1><h1 className='dot'>.</h1>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                      {item.display}
                    </NavLink>
                    {(
                      <div className="big_menu">
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                          <Grid key={index}>
                            <ul>
                              <h4>Home Pages</h4>
                              <li><Link to='/'>Home1</Link></li>
                              <li><Link to='/'>Home2</Link></li>
                              <li><Link to='/'>Home3</Link></li>
                              <li><Link to='/'>Home4</Link></li>
                              <li><Link to='/'>Home5</Link></li>
                            </ul>
                          </Grid>
                          <Grid key={index}>
                            <ul>
                              <h4>Product Pages</h4>
                              <li><Link to='/'>Home1</Link></li>
                              <li><Link to='/'>Home2</Link></li>
                              <li><Link to='/'>Home3</Link></li>
                              <li><Link to='/'>Home4</Link></li>
                              <li><Link to='/'>Home5</Link></li>
                            </ul>
                          </Grid>
                          <Grid key={index}>
                            <ul>
                              <h4>Product Types</h4>
                              <li><Link to='/'>Home1</Link></li>
                              <li><Link to='/'>Home2</Link></li>
                              <li><Link to='/'>Home3</Link></li>
                              <li><Link to='/'>Home4</Link></li>
                              <li><Link to='/'>Home5</Link></li>
                            </ul>
                          </Grid>
                          <Grid key={index}>
                            <ul>
                              <h4>Product Feauters</h4>
                              <li><Link to='/'>Home1</Link></li>
                              <li><Link to='/'>Home2</Link></li>
                              <li><Link to='/'>Home3</Link></li>
                              <li><Link to='/'>Home4</Link></li>
                              <li><Link to='/'>Home5</Link></li>
                            </ul>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                    <i class="ri-arrow-down-s-line"></i>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className='search_icon'>
                <i class="ri-search-line">
                </i></span>
              <span className='user_icon' onClick={() => dispatch(setIsLoginOpen({}))}>
                <i class="ri-user-line"></i>
              </span>
              <span className="fav_icon">
                <i class="ri-heart-3-line"></i>
                <span className="badge">1</span>
              </span>

              <Badge
                badgeContent={cart.length}
                color="secondary"
                invisible={cart.length === 0}
              >
                <span className='shop_icon' onClick={() => dispatch(setIsCartOpen({}))}>
                  <i class="ri-shopping-cart-line"></i>
                </span>
              </Badge>

            </div>
          </div>
        </Container>

      </header>
    </>

  )
}

export default Header






