import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm an IT professional who loves building websites and solving tech problems. I work with tools like HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, Laravel, and MySQL to create websites that look great and work well. I’m also familiar with programming languages like Java and C++, and I have experience in IT support and managing systems. My goal is to create simple, user-friendly solutions that make a difference.`;

export const ABOUT_TEXT = [
  {
    one: "I am a highly skilled Information Technology professional with a strong background in web development, programming, and system management. My educational journey led me to earn a Bachelor of Science in Information Technology with a major in Web Development from Pamantasan ng Cabuyao in Cabuyao City, Laguna, which has provided me with a solid foundation in the field.",
    two: "My technical skills include expertise in web development technologies such as HTML, CSS, JavaScript, PHP, ASP.NET, Bootstrap, and Laravel. I am proficient in database management, particularly MySQL, and have experience in creating dynamic and responsive web applications.",
    three: "Additionally, I am well-versed in several programming languages, including Java, C++, C#, and Visual Basic. I am comfortable working with a variety of development tools such as Visual Studio Code, Sublime, XAMPP, Visual Studio, and Eclipse.",
    four: "My graphic design skills extend to Adobe Photoshop, enabling me to handle tasks related to image manipulation and graphic design. I am also proficient in using Microsoft Office for documentation and presentation purposes.",
    five: "Furthermore, I have a strong background in IT support, including hardware troubleshooting, network cabling, and system management. I have experience in server monitoring using VMware vSphere, PABX monitoring, and familiarity with systems like BPCS (Basic Process Control System) and File Monitoring Systems.",
    six: "With my diverse skill set and educational background, I am well-prepared to contribute to projects that require a combination of technical expertise, creative problem-solving, and effective communication. I look forward to leveraging my skills to drive success in the world of Information Technology.",
  }
];

export const EXPERIENCES = [
  // {
  //   year: "2018 - 2023",
  //   role: "Administrative Assistant",
  //   company: "Suzuki Philippines Inc.",
  //   description: ["Perform preventive maintenance for all IT equipment.",
  //     "Conduct quarterly inventory reports for IT assets.",
  //     "Address and resolve IT requests promptly.",
  //     "Monitor and back up Warehousing, Accounting, and Payroll systems.",
  //     "Troubleshoot and resolve hardware issues.",
  //     "Install and update software, including antivirus and OS.",
  //     "Install LAN cables.",
  //     "Monitor servers and PABX, taking action on issues.",
  //     "Ensure CCTV systems are operational.",
  //     "Grant new employees access to fingerprint biometrics.",
  //     "Provide company IDs to new employees.",
  //     "Set up printers and install drivers.",
  //     "Replace ink cartridges or toner in printers and copiers.",
  //     "Set up projectors for meetings.",
  //   ],
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  {
    year: "2017 - 2018",
    role: "IT Staff",
    company: "MD Distripark Manila Inc.",
    description: ["Perform preventive maintenance for all IT equipment.",
      "Conduct quarterly inventory reports for IT assets.",
      "Address and resolve IT requests promptly.",
      "Monitor and back up Warehousing, Accounting, and Payroll systems.",
      "Troubleshoot and resolve hardware issues.",
      "Install and update software, including antivirus and OS.",
      "Install LAN cables.",
      "Monitor servers and PABX, taking action on issues.",
      "Ensure CCTV systems are operational.",
      "Grant new employees access to fingerprint biometrics.",
      "Provide company IDs to new employees.",
      "Set up printers and install drivers.",
      "Replace ink cartridges or toner in printers and copiers.",
      "Set up projectors for meetings.",
    ],
    technologies: ["Hardware", "Network", "VMware vSphere", "PABX"],
  },
];

export const EXPERIENCES2 = [
  {
    year: "2018 - 2023",
    role: "Administrative Assistant",
    company: "Suzuki Philippines Inc.",
    task1: "Centralized Receiving Custodian (2022-2023)",
    task2:"Acting Supervisor - Warehouse (2021-2023)",
    task3:"3S Shop Tools Custodian (2018-2023)",
    task4:"Document Custodian (2018-2023)",
    task5:"Others:",

    description1: ["Receive and verify deliveries at Suzuki Philippines Plant and Warehouses.",
      "Match deliveries with purchase orders and inspect items.",
      "Secure received items and maintain records using BPCS.",
      "Provide regular reports to Accounting.",
    ],
    description2: ["Safekeep and manage office supplies, promo materials, forms, and cleaning materials.",
      "Record inventory transactions and conduct weekly reports.",
      "Supervise 10 warehouse security and service personnel.",
      "Conduct daily inspections for safety and cleanliness.",
    ],
    description3: ["Safekeep 3S Shop Tools.",
      "Record tool check-ins and check-outs.",
      "Receive and inspect tool deliveries.",
      "Issue tools and maintain monthly inventory reports.",
    ],
    description4: ["Safekeep and organize company records.",
      "Track location and return of borrowed files.",
      "Manage file retrieval and delivery.",
      "Maintain an accurate filing system.",
      "Enforce retention schedules, archive, and dispose of obsolete records.",
      "Standardize document formats for serialization, distribution, and safekeeping.",
    ],
    description5: ["Authorized Suzuki Auto vehicle driver.",
      "Occasionally drive Suzuki executives to meetings or the airport.",
    ],
    technologies: ["FMS(File Monitoring System)", "BPCS",],
  },
];

export const EXPERIENCES3 = [
  {
    year: "2023 - Present",
    role: "Freelance Full Stack Web Dev.",

    description: ["Set Up Authentication",
      "Customize Registration",
      "Implement User Roles",
      "Password Reset Functionality",
      "Secure the Application",
      "Testing",
      "Create the Blog Post Model and Migration",
      "Create a Resource Controller",
      "Set Up Routes",
      "Create Views",
      "Add Role-Based Access Control",
      "Validation and Security",
      "Documentation",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL", "Bootstrap", "TailwindCSS", "ReactJS", "NodeJS",],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Cabuyao, Laguna Philippines",
  email: "reynielobut21@gmail.com",
};


/* For Active Slider and Image Slider */
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

import portfolio1 from "../assets/slider/portfolio1.png";
import portfolio2 from "../assets/slider/portfolio2.png";
import portfolio3 from "../assets/slider/portfolio3.png";
import portfolio4 from "../assets/slider/portfolio4.png";
import portfolio5 from "../assets/slider/portfolio5.png";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: portfolio1,
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: portfolio2,
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: portfolio3,
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: portfolio4,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: portfolio5,
  },
];
