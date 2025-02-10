// import React from "react";
// import CryptofleetImg from "../../assets/cryptofleet.png";
// import Image from "next/image";

// const projects = [
//     {
//       id: 1,
//       title: "Crypto Trading Platform",
//       description: `developed CryptoFleet, a crypto exchange platform, where I built reusable components using Next.js and TypeScript. My work involved:
// ✅ API Integration: Connected GraphQL APIs via AWS Amplify for seamless data fetching.
// ✅ Real-time Charts: Implemented Lightweight Charts to display live cryptocurrency updates for subscribers.
// ✅ Optimized UI/UX: Ensured a responsive & scalable design using Tailwind CSS.
// ✅ High Performance: Leveraged server-side rendering (SSR) for fast page loads & smooth navigation.`
// ,
//       techStack: ["Next.js", "Tailwind CSS", "GraphQL"],
//       image: CryptofleetImg, // ✅ Correct way
//       liveUrl: "https://crypto-trading.com",
//       githubUrl: "https://github.com/username/crypto-project",
//     },
//     {
//       id: 2,
//       title: "E-Commerce Store",
//       description: "An online shopping website with payment integration.",
//       techStack: ["React.js", "Redux", "Stripe API"],
//       image: CryptofleetImg,
//       liveUrl: "https://ecommerce-store.com",
//       githubUrl: "https://github.com/username/ecommerce-store",
//     },
//     {
//       id: 3,
//       title: "Portfolio Website",
//       description: "A personal portfolio showcasing projects and skills.",
//       techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
//       image: CryptofleetImg,
//       liveUrl: "https://portfolio.com",
//       githubUrl: "https://github.com/username/portfolio",
//     },
//     {
//       id: 4,
//       title: "Expense Tracker App",
//       description: "A simple expense tracker with charts and analytics.",
//       techStack: ["React.js", "Context API", "Chart.js"],
//       image: CryptofleetImg,
//       liveUrl: "https://expense-tracker.com",
//       githubUrl: "https://github.com/username/expense-tracker",
//     },
//     {
//       id: 5,
//       title: "Task Management App",
//       description: "A productivity tool for task management and collaboration.",
//       techStack: ["Next.js", "Firebase", "Tailwind CSS"],
//       image: CryptofleetImg,
//       liveUrl: "https://taskmanager.com",
//       githubUrl: "https://github.com/username/task-manager",
//     },
//   ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-orange-500 mb-8">My Projects</h2>
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform"
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
//               <p className="text-gray-400 text-sm mt-2">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.techStack.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-orange-500 text-xs px-2 py-1 rounded-md"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-4">
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   className="bg-orange-500 text-sm px-3 py-1 rounded-md"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   className="bg-gray-700 text-sm px-3 py-1 rounded-md"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CryptoFleetImg from "../../assets/cryptofleet-img.png";
import TechTsImage from "../../assets/tech.ts-image.png";
import GymImage from "../../assets/gym-website.png";
import HotelImg from "../../assets/hotel.png";

const projects = [
  {
    id: "cryptofleet",
    title: "CryptoFleet - Crypto Exchange Website",
    description: "A Next.js & GraphQL powered crypto exchange platform.",
    image: CryptoFleetImg,
    startDate: "Apr 2024",
    endDate: "Continue",
  },
  {
    id: "tech-ts",
    title: "Tech.ts - Website development",
    description: "An online shopping website with payment integration.",
    image: TechTsImage,
    startDate: "march 2024",
    endDate: "April 2024",
  },
  {
    id: "gym",
    title: "Gym - Website development",
    description: "A personal portfolio showcasing projects and skills.",
    image: GymImage,
    startDate: "march 2024",
    endDate: "April 2024",
  },
  {
    id: "hotel",
    title: "Hotel - Website development",
    description: "A simple expense tracker with charts and analytics.",
    image: HotelImg,
    startDate: "march 2024",
    endDate: "April 2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-orange-500 text-center mb-10"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
