import { Fragment } from "react";
import AboutCard from "./home/aboutSection";
import { IntroCard } from "./home/introSection";
import ServicesCard from "./home/servicesSection";

export default function Home() {
  return (
    <Fragment>
      <div className="width-contained">
        <div>
          <IntroCard />
        </div>
        <section id="about-us">
          <AboutCard />
        </section>
        <section id="services">
          <ServicesCard />
        </section> 
        <section id="contact-us">
          {/* <ContactUsCard /> */}
        </section>
      </div> 
    </Fragment>
  );
}
