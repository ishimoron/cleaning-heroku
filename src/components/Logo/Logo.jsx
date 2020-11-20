import React from "react"
import logoImg from '../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'
import './Logo.css'
const Logo = () => {
    return (
        <div className="Logo">
            <NavLink to="/" exact>
            <img src={logoImg} alt="logo"/>
            </NavLink>
        </div>
    )
}
export default Logo;