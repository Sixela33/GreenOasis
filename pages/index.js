// import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Unveiling the Cosmos"
        title="Embark on a Journey to the Stars"
      >
        Nullam euismod, velit at consectetur luctus, tortor elit bibendum massa,
        vel euismod ante orci eget erat. Nullam non nulla nec dui eleifend
        tincidunt. Suspendisse potenti. Sed posuere, libero sed vehicula
        aliquam, elit nulla eleifend massa, nec vestibulum arcu nulla eget
        justo. Donec auctor tellus eu turpis interdum, id fermentum sapien
        rhoncus
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <Benefits data={spaceExplorationBenefits} /> */}
      <SectionTitle
        pretitle="Ignite Curiosity"
        title="Witness Spectacular Launches"
      >
        Nullam euismod, velit at consectetur luctus, tortor elit bibendum massa,
        vel euismod ante orci eget erat. Nullam non nulla nec dui eleifend
        tincidunt. Suspendisse potenti. Sed posuere, libero sed vehicula
        aliquam, elit nulla eleifend massa, nec vestibulum arcu nulla eget
        justo. Donec auctor tellus eu turpis interdum, id fermentum sapien
        rhoncus
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="The Customers Perspective"
        title="Captivating Testimonials"
      >
        Prepare to be inspired by the voices of our satisfied clients. These
        captivating testimonials speak volumes about the impact of our services
        on their lives and businesses. We take immense pride in the success
        stories and transformations our clients have experienced, and we're
        thrilled to share their journeys with you. Discover firsthand how Strive
        has made a difference in the lives of those we've had the privilege to
        serve.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="Curious Minds Want to Know" title="Explore FAQs">
        Explore our FAQs to find answers to common questions and gain valuable
        insights. We're here to make your journey smoother and more informed.
        Discover the knowledge you need with our comprehensive FAQ section.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <PopupWidget />
    </>
  );
};

export default Home;
