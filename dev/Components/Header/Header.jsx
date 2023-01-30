import React, { useState, useEffect, useContext } from "react";
import "./Header.scss";

import { FSContext } from "../../Context/FSContext";

const Header = () => {
  const { getFileFrom } = useContext(FSContext);
  const [gotasUrl, setGotasUrl] = useState("");
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handlerMenuToggle = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  };

  useEffect(() => {
    getFileFrom("media/gotas.png").then((url) => {
      setGotasUrl(url);
    });
  }, []);

  return (
    <header>
      <div className='container'>
        <div className='title'>
          <h1>
            <span>ALEX</span> <span>POOL</span> <span>CLEANING</span>
            <img src={gotasUrl.url} alt='gotas' />
          </h1>
        </div>
        <button
          className='toggle-menu'
          onClick={() => {
            handlerMenuToggle();
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-list' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
          </svg>
        </button>
        <nav className={isMenuActive ? "menu active" : "menu"}>
          <ul>
            <li>
              <a href='#gallery' className='link'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#aboutus' className='link'>
                About Me
              </a>
            </li>
            <li>
              <a href='#contact' className='link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
