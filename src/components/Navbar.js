import React from 'react'
import logo from '../images/play-button.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-top"/>
                    <span className="ms-2" >Play List</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar