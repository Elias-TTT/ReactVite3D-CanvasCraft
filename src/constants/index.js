import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "UI / UX Designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Gang Member",
    company_name: "Old Batumi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Back in my gangster days, I was the Keyboard Capo.",
      "I'd infiltrate mainframes like a digital Al Capone, making firewalls an offer they couldn't refuse.",
      "My code was sharper than a Sicilian suit, and I ran a protection racket for pixels.",
      "They called me Don Debug because, well, I always found the bug.",
      "Life was a byte-sized heist, and my keyboard was my Tommy gun. 🔐💻 #WooStyleCode",
    ],
  },
  {
    title: "1 Year In Jail",
    company_name: "Gegut Castle",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Spent a year in the slammer – turns out orange jumpsuits aren't in this season's fashion lineup.",
      "My cell was cozier than my apartment, and the cuisine? Let's just say I became a connoisseur of mystery meat.",
      "Tried convincing the warden I was framed by my evil twin, but he wasn't buying it.",
      "On the bright side, I'm now an expert in origami with toilet paper. #CellMateOfDestiny",
    ],
  },
  {
    title: "BSU University",
    company_name: "Batumi Shota Rustaveli State University",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "BSU: where dreams of beachside campuses get replaced by nightmares of Geguti prison.",
      "Rumor has it, the campus ghosts are just confused coding errors haunting the halls.",
      "Batumi Shota Rustaveli State University—where even the WiFi has trust issues. #BSUAdventures #GegutiDreams",
      
    ],
  },
  {
    title: "Last Year Student",
    company_name: "Batumi Shota Rustaveli State University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "In my final uni lap at Shota Rustaveli State Uni—more studying than a caffeinated owl.",
      "Juggling code like a circus act; HTML, CSS, JS—name it, I'll tame it.",
      "Planning my grand exit by September, when React bows down to my genius. ",
      "Internship hunt? I'll be the coding ninja companies didn't know they needed! 🎓💻 #UniSurvivor",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "My coding playground: where bits and pixels collide in a symphony of projects, showcasing my tech prowess. 🚀 #CodeCraftsman",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/Elias-TTT/ReactVite3D-CanvasCraft",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };