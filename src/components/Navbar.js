import React, {useState,useEffcet} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // const setButton() => () {

    // }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        LeHuuPhucCV <i class="fas fa-id-card"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-items">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/resume' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>    
        </>
    )
}

export default Navbar
