import React from 'react'
import { FaBars } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiCoffeeBeans } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Promotion',
        path: '/Promotion',
        icon: <RiMoneyDollarCircleFill/>,
        cName: 'nav-text'
    },
    {
        title: 'News',
        path: '/News',
        icon: <BiNews/>,
        cName: 'nav-text'
    },
    {
        title: 'Coffee tips',
        path: '/coffeeTips',
        icon: <GiCoffeeBeans/>,
        cName: 'nav-text'
    },
    {
        title: 'About us.',
        path: '/aboutUs',
        icon: <FaUserTie/>,
        cName: 'nav-text'
    },
    {
        title: 'Admin Login',
        path: '/login',
        icon: <BiLogIn/>,
        cName: 'nav-text',
    },
]