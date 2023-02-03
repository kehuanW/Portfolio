import { useState } from 'react';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<CloseIcon size={30} style={{ color: '#ffffff' }} />)
                        : (<MenuIcon size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link className="nav-link" to="intro" smooth={true} offset={-50} duration={500} onClick={closeMenu} spy={true} >
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="about" smooth={true} offset={-50} duration={500} onClick={closeMenu} spy={true}>
                            ABOUT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="skills" smooth={true} offset={-50} duration={500} onClick={closeMenu} spy={true}>
                            SKILLS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="projects" smooth={true} offset={-50} duration={500} onClick={closeMenu} spy={true}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="contact" smooth={true} offset={-50} duration={500} onClick={closeMenu} spy={true}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;