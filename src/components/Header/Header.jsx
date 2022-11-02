import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './Header.css';
import {user} from "../../utils/user"

import {Avatar, Box} from "@mui/material";
const isLoggedIn = true;

function Header() {
  let header__container;
  if (!isLoggedIn) {
    header__container =
    <Box>
      <Link to = '/signup' className='header__link'>Регистрация</Link>
      <Link to = '/signin' className='header__link'>Войти</Link>
    </Box>
  } else {
    header__container =
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Link to = '/profile' className='header__link'>Кабинет</Link>
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{ width: "45px", height: "45px", borderRadius: "50%", ml: "16px"}}
        />
      </Box>
  }

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6.4% 0 7%" }}>
      <Box sx={{ width: "10%", height: "63%"}}>
        <Link to = '/'>
          <img src={logo} alt='Логотип сайта StartIn' />
        </Link>
      </Box>
      {header__container}
    </Box>
  )
}
export default Header;