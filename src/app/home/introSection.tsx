import Image from "next/image";
import './home.scss';

export const IntroCard = () => {
  return (
    <div className="no-card-group">
      <div className="container c-2">
        <Image 
          className="mx-auto"
          src={'/welcome-3d-art.jpg'}
          alt="welcome to Mechtatel"
          height={320}
          width={360} 
        />
      </div>

      <div className="container c-1">
        <h2>Welcome to Mechtatel</h2>
        <br/>
        <div className="mw-500">
          <p>
            Nigeria&#39;s trusted partner for Recruitment, Outsourcing, Training, and Verification Services.
            With a dedicated team and a robust network across the country, we deliver customized, 
            high-impact HR solutions designed to meet your unique business needs.
          </p>
          <br/>
          <p>Working with Mechtatel will help you streamline your workforce management for superior reliability, and efficiency.
            We introduce our clients to a relevant, hand-picked audience using innovative practices and content strategies to elevate the conversation. 
          </p>
        </div>
        
        <div className="min-height-50" />
        <button className="btn-success">Join our Online Community</button>
      </div>
    </div>
  )
}
