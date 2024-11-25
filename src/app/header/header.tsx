"use client";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import './header.scss';

const menuItems = [
  { 
    title: "About us", 
    link: "/#about-us"
  },
  { 
    title: "Services", 
    link: "/#services"
  }, 
  { 
    title: "Projects", 
    link: "/#projects"
  },
  { 
    title: "Contact us", 
    link: "/#contact-us"
  },
]

const Header = () => {  
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <Navbar 
      fixed="top"
      expand="lg" 
      className="header"
    >
      <Container>
        <nav className='nav-header'>
          <div className="flex lg:hidden">
            <button 
              type="button" 
              onClick={() => setShowNavExternal(!showNavExternal)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-500"
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className='hidden lg:flex lg:gap-x-12 px-6'>
            <div className='relative menu-stack'>
              {
                menuItems.map((item, index) => 
                <a key={index} href={item?.link}>{item?.title}</a>
              )}
            </div>
              
          </div>
          <div className={'p-2'}>
            <button className='border border-gray-600 rounded py-2 px-4 bg-gray-700 hover:bg-blue-900 text-yellow-300'>
              <b>Get in Touch</b> 
            </button>
          </div>
        </nav>
        <main className={'justify-content-end'}>
          <div className='text-center mt-8'>
            <div className='card container'>
              <p className={`logo-text`}>
                <span className={`logo-title`}>M</span>echtatel</p>
              <p className='logo-subtext'>There&#39;s always that perfect candidate for the job ...</p>
              <br/>
            </div>
          </div>
        </main>
      </Container>

      {showNavExternal && 
        <Container>
          <div className='sm:hidden drawer'>
            <div className='justify-content-end'>
              <button 
                type="button"
                className="bg-dark -mt-2 rounded-circle"
                onClick={()=> setShowNavExternal(false)}
              >
                <span className='font-lg text-gray-400'> &times;</span>
              </button>
            </div>

            <div className='grid my-6'> {
              menuItems.map((item, index) => 
                <p key={index} className='m-3'>
                  <a 
                    key={index} 
                    href={item?.link}
                    onClick={() => setShowNavExternal(false)}
                  >
                    {item?.title}
                  </a>
                </p>
              )}
            </div>
          </div>
        </Container>
      }
    </Navbar>
  )
}

export default Header