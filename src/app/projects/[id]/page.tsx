"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import CryptoFleetImg from "../../../assets/cryptofleet-desktop.png";
import TechTsImage from "../../../assets/tech.ts-image.png";
import GymImage from "../../../assets/gym-website.png";
import EkoFuelng from "../../../assets/ekofuelng.png";
import CryptoFleetMobile from "../../../assets/cryptofleet-mobile.png";
import CryptoFleetTablet from "../../../assets/cryptofleet-tablet.png";

const projects = [
  {
    id: "cryptofleet",
    title: "CryptoFleet – Crypto Trading Platform",
    overview:
      "Developed the frontend of a real-time crypto trading platform during my time at Panacloud Pvt Ltd, starting in April 2024. The platform delivers a seamless trading experience with live price tracking, secure trade execution, and interactive dashboards. Built using Next.js for SSR and performance, along with Tailwind CSS and Lightweight Charts for responsive and real-time UI. The project is live and continues to receive updates.",
    features: [
      "Live price tracking",
      "Secure trading system",
      "Authentication",
      "Mobile responsive UI",
    ],
    technologies: [
      "Next.js",
      "GraphQL",
      "REST API",
      "Tailwind CSS",
      "Lightweight Charts",
    ],
    startDate: "April 2024",
    endDate: "Continue",
    url: "https://cryptofleet.com",
    screenshots: {
      mobile: [CryptoFleetMobile],
      tablet: [CryptoFleetTablet],
      desktop: [CryptoFleetImg],
    },
  },

  {
    id: "tech-ts",
    title: "TechTs – Service Company Website",
    overview:
      "A freelance project for TechTs, a service-based company offering web and mobile development. Delivered a modern, responsive website with dedicated sections for services, company info, and contact. Focused on clean layout, brand consistency, and user-friendly interaction.",
    features: [
      "Responsive design across all devices",
      "Services and company overview sections",
      "Interactive contact form",
      "SEO-friendly static and dynamic pages",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Mantine UI"],
    startDate: "March 2024",
    endDate: "April 2024",
    url: "https://techts.com",
    screenshots: {
      mobile: [CryptoFleetMobile],
      tablet: [CryptoFleetTablet],
      desktop: [TechTsImage],
    },
  },
  {
    id: "gym",
    title: "Gym Website – Fitness UI (Practice Project)",
    overview:
      "A self-initiated practice project to build a modern and responsive frontend for a fitness center. Showcases gym programs, personal trainers, and membership plans with smooth UI animations and device responsiveness.",
    features: [
      "Hero section with call-to-action",
      "List of programs and trainers",
      "Responsive design across devices",
      "Smooth scroll and UI animations",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Mantine UI",
      "Embla Carousel (Autoplay)",
      "Tabler Icons",
    ],
    startDate: "March 2024",
    endDate: "April 2024",
    url: "https://gymwebsite.com",
    screenshots: {
      mobile: [CryptoFleetMobile],
      tablet: [CryptoFleetTablet],
      desktop: [GymImage],
    },
  },
  {
    id: "ekofuelng",
    title: "EkoFuelNG – Fuel Price Dashboard",
    overview:
      "A full-stack fuel price dashboard developed from scratch during my time at QF Network. The platform allows authorized clients to log in and submit up-to-date prices for petrol, diesel, and LPG. Public users can view fuel rates, while access to price submission is role-restricted through an admin panel.",
    features: [
      "Admin panel for fuel price submission",
      "Public dashboard to view fuel rates",
      "Role-based access control",
      "Fully custom REST API",
    ],
    technologies: ["React.js", "Tailwind CSS", "NestJS", "NeonDB"],
    startDate: "March 2024",
    endDate: "April 2024",
    url: "https://ekofuelng.com",
    screenshots: {
      mobile: [CryptoFleetMobile],
      tablet: [CryptoFleetTablet],
      desktop: [EkoFuelng],
    },
  },
];

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  const {
    title,
    overview,
    features,
    technologies,
    startDate,
    endDate,
    url,
    screenshots,
  } = project;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            {title}
          </h1>
          {url && (
            <p className="text-lg text-blue-400">
              Live:{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors duration-200"
              >
                {url}
              </a>
            </p>
          )}
        </div>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">{overview}</p>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-orange-500 text-gray-900 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">
            Duration
          </h2>
          <p className="text-lg text-gray-200">
            {startDate} – {endDate}
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center text-orange-400">
            Desktop Preview
          </h2>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src={screenshots.desktop[0]}
              alt="Desktop project preview"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
