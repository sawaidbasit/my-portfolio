"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CharacterImg from "../../assets/Crypto-master.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-between px-6 py-12 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="md:w-1/2 text-center md:pl-20 md:text-left">
        <h1 className="text-5xl font-bold leading-tight">
          Hello, <br />
          I’m <span className="text-orange-400">Sawaid Basit</span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="mt-4 text-2xl font-semibold text-orange-400">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Specialist",
              "Next.js & React.js Expert",
              "TypeScript Developer",
              "Tailwind CSS Pro",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Updated Description */}
        <p className="mt-4 text-gray-400 leading-relaxed">
          I’m a passionate <b>Full Stack Developer</b> with expertise in the{" "}
          <b>MERN Stack</b> (MongoDB, Express.js, React.js, Node.js). I craft
          high-performance web applications using <b>Next.js, TypeScript</b> and{" "}
          <b>Tailwind CSS</b>, with a strong focus on scalability,
          responsiveness, and user experience.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-all">
          Hire Me
        </button>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="w-full flex justify-center relative mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Circular Background */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-orange-500 animate-pulse"></div>

        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={CharacterImg}
            alt="Sawaid Profile"
            width={280}
            height={280}
            className="rounded-full shadow-lg sm:w-[350px] sm:h-[350px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
