import React from 'react';
import Image from 'next/image';
import './services.scss';

export interface ServicesCardProps {
  bgImg: string;
  title: string;
  subtitle: string;
  subscript: string;
}

const ServiceCard: React.FC<ServicesCardProps> = ({ 
  bgImg, 
  title, 
  subtitle, 
  subscript,
}) => {
  return (
    <div>
      <div 
        className='paper'
      >
        <Image 
          src={bgImg} 
          alt='mechtatel services'
          height={500}
          width={750}
        />
      </div>

      <div className='info-group'>
        <h5>{title}</h5>
        <p>{subtitle}</p>
        <p className='subscript'>{subscript}</p>
      </div>
    </div>
  )
}

export default ServiceCard