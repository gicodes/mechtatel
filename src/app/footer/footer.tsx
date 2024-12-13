import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  // a tags or link would be used on the final code to route to MT SM pages
  return (
    <div className='w-100 mt-8 mb-4'>
      <div className='justify-content-center'>
        <div className='m-5'>
          <FaInstagram size={20} />
        </div>
        <div className='m-5'>
          <FaFacebook size={20} />
        </div>
        <div className='m-5'>
          <FaTwitter size={20} />
        </div>  
        <div className='m-5'>
          <FaYoutube size={20} />
        </div>
      </div>
    </div>
  )
}

export default Footer;