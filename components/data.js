import {
  SunIcon,
  RocketLaunchIcon,
  StarIcon,
  MoonIcon,
  SparklesIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/Saly-16.png";
import benefitTwoImg from "../public/img/Saly-43.png";

const benefitOne = {
  title: "Unlock the Cosmos",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Stellar Discoveries",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      icon: <StarIcon />,
    },
    {
      title: "Interplanetary Exploration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      // icon: <SatelliteDishIcon />,
      icon: <MoonIcon />,
      
    },
    {
      title: "Space Technology",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      icon: <RocketLaunchIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Experience the Beyond",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Inspirational Journeys",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      icon: <SparklesIcon />,
    },
    {
      title: "Scientific Insights",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      icon: <GlobeAmericasIcon />,
    },
    {
      title: "Cosmic Discoveries",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue a ante placerat laoreet. Phasellus sed eros in libero venenatis sodales.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
