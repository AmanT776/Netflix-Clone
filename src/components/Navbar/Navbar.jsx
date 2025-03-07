import React, { useEffect, useRef } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { logout } from "../../firebase";

export default function Navbar(){
    const navRef = useRef()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    }, [])
    return(
        <nav>
            <div ref={navRef} className="navbar-left">
                <img className='logo' src={logo} alt="netflix logo"/>
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <i className="icon fa-solid fa-magnifying-glass"></i>
                <p>children</p>
                <i className="icon fa-regular fa-bell"></i>
                <div className="navbar-profile">
                <i className="navbar-profile icon fa-solid fa-user"></i>
                <div className="dropdown">
                    <p onClick={()=>{
                        {logout()}
                    }}>Sign out</p>
                </div>
                </div>
                
            </div>
        </nav>
    )
}

