import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa';
import logo from './logo/logo.svg';
import { social, links } from './data';

const Navbar = () => {
  // state 
  const [showLinks, setShowLinks] = useState(false);

  // useRef
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  
  // 
  useEffect(() => {
    // atur tinggi container
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight)

    // jika togle di klik (showlink true)
    if (showLinks) {
      // edit komponen css tsb
      linksContainerRef.current.style.height = `${linksHeight}px`;

    } else {
      linksContainerRef.current.style.height = `0px`
    }
  }, [showLinks])

  return (
    <nav className="navbar-react">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="img" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>


        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {
              links.map(el => (
                <li key={Math.random()}>
                  <a href={el.url}>{el.text}</a>
                </li>
              ))
            }
          </ul>
        </div>



        <ul className="social-icons">

          {
            social.map((el) => (
              <li key={Math.random()}>
                <a href={el.url}>{el.icon}</a>
              </li>
            ))
          }

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
