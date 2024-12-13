import Image from 'next/image'
import './home.scss';

const AboutCard = () => {
  return (
    <div className='no-card-group-bg'>
      <div className='c2-gif'>
        <Image 
          src={'/about-us.avif'}  
          alt='mechtatel services' 
          height={320}
          width={400}
        />
      </div>

      <div className='card container'>
        <div className='card-body'>
          <h6>Overview</h6>
          <p>
            Founded in the early 2020s, and Licensed by the Federal Ministry of Labor & Productivity, 
            Mechtatel has earned a nationwide reputation for excellence, with commitment to helping organizations optimize productivity and foster seamless working relationships. 
          </p>
          <br/>
          <h6>Mission</h6>
          <p>
          Empowering people and driving organizations forward with innovative, comprehensive HR solutions that make a real difference.
          </p>
          <br/>
          <h6>Vision</h6>
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