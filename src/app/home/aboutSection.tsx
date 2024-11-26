import Image from 'next/image'
import './home.scss';

const AboutCard = () => {
  return (
    <div className='no-card-group-bg'>
      <div className='c2-gif mx-auto'>
        <Image 
          src={'/about-us.avif'}  
          alt='mechtatel services' 
          height={320}
          width={400}
        />
      </div>
      <div className='card container mx-auto'>
        <div className='card-body'>
          <h5>Overview</h5>
          <p>
            Founded in the early 2020s, and Licensed by the Federal Ministry of Labor & Productivity, 
            Mechtatel has earned a nationwide reputation for excellence, with commitment to helping organizations optimize productivity and foster seamless working relationships. 
          </p>
          <br/>
          <h5>Mission</h5>
          <p>
          Empowering people and driving organizations forward with innovative, comprehensive HR solutions that make a real difference.
          </p>
          <br/>
          <h5>Vision</h5>
          <p>
            Through a focus on innovation, quality, and integrity, we ensure our client&#39;s organizations have access to top-tier talent, tailored training programs, 
            and verified candidate information to support sustainable growth
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard