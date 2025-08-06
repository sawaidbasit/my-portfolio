"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  startDate: string;
  endDate: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  startDate,
  endDate,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -5 }}
      whileTap={{ scale: 0.97 }}
      className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all 
      hover:shadow-2xl hover:border-gray-600"
    >
      {/* Image */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mt-4 text-orange-400">{title}</h3>

      {/* Date Range */}
      <p className="text-sm text-gray-400 mt-1">
        📅 {startDate} - {endDate}
      </p>

      {/* Description */}
      <p
        className="text-gray-300 mt-2 text-sm leading-relaxed"
        title={description} // tooltip
      >
        {description.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </p>

      {/* Button */}
      <Link href={`/projects/${id}`}>
        <button className="mt-4 text-sm bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </motion.div>
  );
}
