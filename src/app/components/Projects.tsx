"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CryptoFleetImg from "../../assets/cryptofleet-desktop.png";
import TechTsImage from "../../assets/tech.ts-image.png";
import GymImage from "../../assets/gym-website.png";
import HotelImg from "../../assets/hotel.png";
import EkoFuelng from "../../assets/ekofuelng.png";

const projects = [
  {
    id: "cryptofleet",
    title: "CryptoFleet – Crypto Trading Platform",
    description:
      "Developed the frontend of a real-time crypto trading platform during my time at Panacloud Pvt Ltd, starting in April 2024. The platform delivers a seamless trading experience with live price tracking, secure trade execution, and interactive dashboards. Built using Next.js for SSR and performance, along with Tailwind CSS and Lightweight Charts for responsive and real-time UI. The project is live and continues to receive updates.",
    image: CryptoFleetImg,
    startDate: "Apr 2024",
    endDate: "Continue",
  },
  {
    id: "tech-ts",
    title: "TechTs – Service-Based Company Website",
    description:
      "A freelance project for TechTs, a service-based company offering web and mobile development. Delivered a modern, responsive website with dedicated sections for services, company info, and contact. Focused on clean layout, brand consistency, and user-friendly interaction.",
    image: TechTsImage,
    startDate: "March 2024",
    endDate: "April 2024",
  },
  {
    id: "gym",
    title: "Gym Website – Fitness UI Platform",
    description:
      "A self-initiated practice project to build a modern and responsive frontend for a fitness center. Showcases gym programs, personal trainers, and membership plans with smooth UI animations and device responsiveness.",
    image: GymImage,
    startDate: "March 2024",
    endDate: "April 2024",
  },
  {
    id: "ekofuelng",
    title: "EkoFuelNG – Fuel Price Dashboard",
    description:
      "A full-stack fuel price dashboard developed from scratch during my time at QF Network. The platform allows authorized clients to log in and submit up-to-date prices for petrol, diesel, and LPG. Public users can view fuel rates, while access to price submission is role-restricted through an admin panel.",
    image: EkoFuelng,
    startDate: "March 2024",
    endDate: "April 2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white pt-10 px-8">
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
