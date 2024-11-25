import { Fragment } from "react";
import Header from "./header/header";
import { IntroCard } from "./home/introSection";
import AboutCard from "./home/aboutSection";

export default function Home() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <IntroCard />
        </div>
        <section id="about-us">
          <AboutCard/>
        </section>

        <section id="services">

        </section>
      </main>

      <footer>
        <section id="contact-us">

        </section>
      </footer>
    </Fragment>
  );
}
