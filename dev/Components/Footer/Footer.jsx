import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='copyright'>Alex Pool Cleaning 2023. All rights reserved.</p>
        <p className='designedby'>Designed by <a href='https://github.com/rapetitc' target='_blank' className="link">@rapetitc</a></p>
      </div>
    </footer>
  );
};

export default Footer;
