"use client";
import { useParams } from "next/navigation"; 
import { motion } from "framer-motion";
import Image from "next/image";
import CryptoFleetImg from "../../../assets/cryptofleet.png"
import TechTsImage from "../../../assets/tech.ts-image.png";
import GymImage from "../../../assets/gym-website.png";

// import CryptoFleetImg from "../../assets/cryptofleet.png";
// import TechTsImage from "../../assets/tech.ts.png";
// import GymImage from "../../assets/gym-website.png"

const projects = [
  {
    id: "cryptofleet",
    title: "CryptoFleet Exchange",
    description: "A modern crypto exchange platform with real-time charts, seamless transactions, and enhanced security.",
    image: {CryptoFleetImg},
    techStack: ["Next.js", "Tailwind CSS", "GraphQL", "AWS Amplify", "Framer Motion"],
    features: [
      "Live Crypto Trading Charts",
      "Secure Transactions with Binance API",
      "Server-side Rendering for Performance",
      "Fully Responsive UI",
      "Dark Mode Integration",
    ],
  },
  {
    id: "tech-ts",
    title: "tech.ts Website development",
    description: "An AI-powered automated crypto trading bot...",
    image: {TechTsImage},
    techStack: ["Python", "TensorFlow", "FastAPI", "Binance API"],
    features: [
      "Automated Trading Strategies",
      "AI-Based Market Predictions",
      "Real-Time Order Execution",
      "Backtesting and Performance Analytics",
    ],
    skillsUsed: ["Machine Learning", "API Integration", "Algorithmic Trading"],
  },
  {
    id: "gym",
    title: "Gym Website development",
    description: "An AI-powered automated crypto trading bot...",
    image: {GymImage},
    techStack: ["Python", "TensorFlow", "FastAPI", "Binance API"],
    features: [
      "Automated Trading Strategies",
      "AI-Based Market Predictions",
      "Real-Time Order Execution",
      "Backtesting and Performance Analytics",
    ],
    skillsUsed: ["Machine Learning", "API Integration", "Algorithmic Trading"],
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-semibold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
        >
          <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-orange-500 text-center mt-8">{project.title}</h1>
        <p className="text-lg text-gray-300 text-center mt-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Tech Stack Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300 text-sm shadow-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
