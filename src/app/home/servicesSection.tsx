import React from 'react'
import ServiceCard from '../services/serices-card';
import { ServicesText, TopServices } from '../services/services-data';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const ServicesCard = () => {
  return (
    <>
      <div className='bg-calm no-card-group-bg'>
        <div className='services-container'>
          <h4>Our Services at Mechtatel</h4>
          <br/>

          <div className='stereo'>
            <div className='mod'>
              <FaCalendarAlt />
              <span>Monday 9, Dec</span>
            </div>
            <div className='mod'>
              <FaUserAlt />
              <span>Olayunmi, M.D.</span>
            </div>
          </div>
          <p>
            At Mechtatel, we are dedicated to transforming human resource management into a seamless and impactful experience for businesses and individuals. 
            We offer a comprehensive range of services tailored to meet the diverse needs of organizations across industries. Here’s how we help you achieve your HR goals:
          </p>
          <ul className='mt-6'>
            { ServicesText.map((service, index) => (
                <li key={index} className='mt-6'>
                  <h6>{service?.title}</h6>
                  <p>{service?.description}</p>
                </li>
            ))}
          </ul>
        </div>

        <div className='mt-6 mw-500'>
        { TopServices.slice(0, 3).map((service, index) => (
          <div key={index}>
            <ServiceCard 
              bgImg={service.bgImg} 
              title={service.title}
              subtitle={service.subtitle}
              subscript={service.subscript}
            />
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServicesCard;