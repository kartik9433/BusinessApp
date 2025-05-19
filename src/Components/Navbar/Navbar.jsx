import React,{useState,useEffect} from 'react'
import Logo from '../../assests/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
    const [sidenav,setSidenav] = useState(false);
    const[sticky,setSticky] = useState(false);
  const menuIcon = <FontAwesomeIcon icon={faBars} />

   const sidenavShow = ()=>{
        setSidenav(!sidenav);
   }
   // Scroll fixed  navbar
      useEffect(()=>{
        const handleScroll = ()=>{
            setSticky(window.scrollY>20);
        }
        window.addEventListener('scroll',handleScroll);
        return  ()=>window.removeEventListener('scroll',handleScroll);
      })

  return (
    
    <headerd id='site_header' className={`${sticky?"sticky":''}`}>
         <div className="container">
             <div className="navbar" id='navbar'>
                  <div className="navbar_brand">
                         <a href="/">
                         <img src={Logo} alt="Logo/" />
                         </a>
                    </div>
                    <div className="navbar_toggler" onClick={sidenavShow}>
                      {menuIcon}
                    </div>
                    <div className={`menu_items ${sidenav===true ? 'active':''}`}> 
                      <ul>
                        <li>
                      <Link   to="Home" spy={true}  smooth={true}>Home</Link>
                        </li>
                        <li>
                      <Link   to="about" spy={true}  smooth={true}>About us</Link>
                        </li>
                        <li>
                      <Link  to="services" spy={true}  smooth={true}>Services</Link>
                        </li>
                         <li>
                      <Link  to="blog" spy={true}  smooth={true}>Blog</Link>
                        </li>
                           <li>
                      <Link to="contact" spy={true}  smooth={true}>Contact</Link>
                        </li>
                      </ul>
                    </div>
             </div>
         </div>
    </headerd>
        
  )
}

export default Navbar
