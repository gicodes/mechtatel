import Image from "next/image";
import './home.scss';

export const IntroCard = () => {
  return (
    <div className="no-card-group">
      <div className="container c-2 mx-auto">
        <Image 
          className="mx-auto"
          src={'/welcome-3d-art.jpg'}
          alt="welcome to Mechtatel"
          height={320}
          width={360} 
        />
      </div>
      <div className="container c-1 mx-auto">
        <h3>Welcome to Mechtatel Limited</h3>
        <br/>
        <p>
          Nigeria&#39;s trusted partner for Recruitment, Outsourcing, Training, and Verification Services.
          With a dedicated team and a robust network across the country, we deliver customized, 
          high-impact HR solutions designed to meet your unique business needs.
        </p>
        <br/>
        <p>Working with Mechtatel will help you streamline your workforce management for superior reliability, and efficiency.
          We introduce our clients to a relevant, hand-picked audience using innovative practices and content strategies to elevate the conversation. 
        </p>
        <div className="min-height-25"/>
        <button className="btn-success">Join our Online Community</button>
      </div>
    </div>
  )
}
