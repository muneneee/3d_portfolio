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
    threed,
    summz,
    talent,
    carrent,
    jobit,
    tripguide,
    threejs,
    cloudfactory,
    kabarak,
    moringa,
    django,
    python,
    nyawira,
    john,
    anita,
    demo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud worker",
      company_name: "CloudFactory",
      icon: cloudfactory,
      iconBg: "#383E56",
      date: "May 2021 - Present",
      points: [
        "Successfully trained Artificial Intelligence (AI) to accurately recognize objects and people, resulting in improved efficiency and accuracy of object/person identification processes.",
        "Successfully developed and implemented a data extraction system for documents, enabling AI to utilize extracted data to improve decision-making processes, leading to more accurate and efficient data analysis.",
        "Worked to solve complex problems using the latest in Cloud, Mobile, and Web Technologies.",
        "Collaborated with back-end and front-end developers to ensure seamless integration of database functionality into web applications",
      ],
    },
    {
      title: "Bachelor of Science in Computer Science",
      company_name: "Kabarak University",
      icon: kabarak,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Sep 2024",
      points: [
        "Learnt programming fundamentals, including data structures and algorithms, object-oriented programming, and software development methodologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Learnt about Computer organization and architecture, including digital logic design, CPU design, memory hierarchy, and input/output systems.",
      ],
    },
    {
      title: "Software Development course",
      company_name: "Moringa School",
      icon: moringa,
      iconBg: "#383E56",
      date: "Feb 2020 - Jul 2020",
      points: [
        "Developing and maintaining web applications using React.js, Django and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Kevin has been a true pleasure. His expertise in software development and attention to detail has resulted in a seamless and highly-functional product.",
      name: "Nyawira Muturi",
      designation: "Fullstack Engineer",
      company: "Power Learn Project",
      image: nyawira,
    },
    {
      testimonial:
        "I had the pleasure of working with Kevin on a complex software project and was thoroughly impressed with their technical skills and ability to problem-solve. ",
      name: "John Muriuki",
      designation: "CEO",
      company: "Skyhost Kenya",
      image: john,
    },
    {
      testimonial:
        "As a fellow software engineer, I have had the opportunity to work with Kevin on multiple projects. His technical expertise and ability to quickly learn new technologies has been invaluable.",
      name: "Anita Kahenya",
      designation: "Technical Mentor",
      company: "Moringa School",
      image: anita,
    },
  ];
  
  const projects = [
    {
      name: "Ai article summarizer",
      description:
        "This is a web app that takes the url of an article and summarizes the article using OpenAi's summarizer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summz,
      source_code_link: "https://github.com/muneneee/OpenAi_summarizer",
      live_link: "https://64472b9a3144e74df7f0964a--boisterous-platypus-f0a632.netlify.app/",
    },
    {
      name: "3D Shirt designer",
      description:
        "A web application that allows you to design 3D shirts and prompt AI to give you designs based off your description.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: threed,
      source_code_link: "https://github.com/muneneee/3D-Shirt-Design",
      live_link: "https://stellular-faun-1cd7b9.netlify.app/",
    },
    {
      name: "Talent Assessment",
      description:
        "A talent assessment app that uses the user's input to determine the best career path for them using a trained AI model.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: talent,
      source_code_link: "https://github.com/muneneee/talent",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };