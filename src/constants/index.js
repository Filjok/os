const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },

  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Angular.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Animations",
    items: ["GSAP", "Anime.js"],
  },
  {
    category: "Styling",
    items: ["HTML", "SASS", "CSS3", "SCSS", "Bootstrap"],
  },
  {
    category: "State Management",
    items: ["ContextAPI", "Zustand"],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Zeplin", "Blender"],
  },

  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "GitLab", "Vercel", "Netlify"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

export { navLinks, navIcons, dockApps, blogPosts, techStack, socials };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Techwarelab website",
      icon: "/images/folder.png",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "Techwarelab website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Designed and developed a modern corporate website for TechwareLab using Next.js and GSAP,featuring 3D animations, smooth interactions, and engaging micro-transitions.",
            "Focused on delivering a high-performance, responsive, and visually dynamic user experience that enhanced brand presence and Interactivity.",
            "Collaborated closely with the design team to implement a sleek UI/UX that aligned with TechwareLab's innovative ethos.",
            "The project showcased my ability to blend cutting-edge web technologies with creative design to produce a standout digital platform.",
          ],
        },
        {
          id: 2,
          name: "techwarelab.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://tl-website-dev.techlabz.in/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "techwarelab.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Infithra website",
      icon: "/images/folder.png",
      kind: "folder",

      children: [
        {
          id: 1,
          name: "Infithra website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built an interactive, user-focused landing page for an HRMS product using Angular with custom animations and modern UI patterns.",
            "Designed the interface with a user-driven approach, ensuring clarity, engagement, and smooth navigation to highlight product features and drive conversions.",
            "Implemented responsive design principles to ensure optimal performance across devices, enhancing accessibility and user satisfaction.",
            "This project demonstrated my skills in Angular development, UI/UX design, and creating engaging web experiences tailored to user needs.",
          ],
        },
        {
          id: 2,
          name: "Infithra.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://infithra.com/",
        },
        {
          id: 4,
          name: "infinthra.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",

          imageUrl: "/images/project-2.png",
        },
      ],
    },
    // ▶ Project 3
    {
      id: 7,
      name: "ActiveFitness website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ActiveFitness website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a customizable e-commerce platform where websites can be dynamically built and managed through an admin panel with full component-level control.",
            "Implemented advanced features such as modular UI components, real-time updates, and flexible layout management to provide a scalable and user-friendly site builder experience.",
            "Focused on delivering a seamless user experience with intuitive design and robust functionality, enabling users to create and modify their online stores effortlessly.",
            "This project highlighted my expertise in creating dynamic web applications tailored to user empowerment.",
          ],
        },
        {
          id: 2,
          name: "ActiveFitness.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://activefitnessstore.com/",
        },
        {
          id: 4,
          name: "ActiveFitness.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
    // ▶ Project 4

    {
      id: 8,
      name: "Meloc website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: " Meloc website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Designed and developed an e-commerce website with a modern, visually appealing UI enhanced by smooth animations and micro-interactions.",
            "Focused on delivering a seamless shopping experience, with responsive design, intuitive navigation, and engaging product displays to boost user engagement and conversions.",
            "Collaborated with the design team to ensure brand consistency and a user-centric approach throughout the site.",
            "This project showcased my ability to blend aesthetic design with functional e-commerce features using Next.js and GSAP.",
          ],
        },
        {
          id: 2,
          name: " Meloc.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://meloc.ge/",
        },
        {
          id: 4,
          name: "Meloc.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
    // ▶ Project 5

    {
      id: 9,
      name: " BVB PRO",
      icon: "/images/folder.png",
      kind: "folder",

      children: [
        {
          id: 1,
          name: " BVB PRO.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Designed and developed a high-impact landing page for a professional beach volleyball event in Dubai using Next.js, SCSS, and GSAP.",
            "Focused on delivering a visually dynamic experience with smooth scroll-triggered animations,responsive design, and performance-optimized layout.",
            "Created engaging motion effects and interactive sections to boost event visibility and audience engagement.",
            "This project highlighted my ability to combine cutting-edge web technologies with creative design to produce a standout digital platform for event promotion.",
          ],
        },
        {
          id: 2,
          name: " BVB-PRO.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://bvbpro.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: " BVB PRO.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "UI/UX Developer by day, and batman by night.",
      description: [
        "Hey! I’m Filjo 👋 — a UI/UX and frontend developer who spends an unhealthy amount of time making pixels behave.",
        "I work with JavaScript, React, Next.js, SCSS, and all the usual suspects… basically everything except calm and normal sleep schedules.",
        "I’m obsessed with clean UI, smooth animations, and writing code that doesn’t scream for help when someone opens the file.",
        "I know Tailwind and Bootstrap too, but let’s be honest — I only use them when life forces me. SCSS is my real love story ❤️.",
        "When I’m not coding, you’ll find me tweaking animations no one asked for, pretending coffee is a personality trait, or Googling problems I created myself 😅.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Tailwind",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Yes, I know Tailwind. I’ve even used it enough to memorize half the class names accidentally.",
        "But honestly… I’m an SCSS believer. Nesting, variables, mixins—it's like writing poetry.",
        "Tailwind feels like someone handed me a bag of utility classes and said ‘good luck’.",
        "SCSS, on the other hand? Clean, elegant, organized—like a well-folded bedsheet.",
        "So yeah, I use Tailwind when I have to… but SCSS is still the superior love of my syntax life.",
      ],
    },

    {
      id: 2,
      name: "Bootstrap",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "I know Bootstrap—I've used it enough to recognize a Bootstrap website from 3 kilometers away.",
        "But let’s be honest: every Bootstrap site looks like its cousin… who looks like its cousin… who looks like its cousin.",
        "It’s great for quick layouts, but sometimes it feels like fighting the framework just to look original.",
        "SCSS gives me freedom; Bootstrap gives me déjà vu.",
        "So yes, I can use Bootstrap—but only if the project absolutely insists on looking ‘Bootstrap-ish’.",
      ],
    },
    ,
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
