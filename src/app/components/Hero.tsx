"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CharacterImg from "../../assets/Crypto-master.png"
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-24 bg-gradient-to-b from-black to-gray-900 text-white">


      <div className="md:w-1/2 text-center md:text-left">
  <h1 className="text-5xl font-bold leading-tight">
    Hello, <br />
    This is <span className="text-orange-400">Sawaid Basit</span>
  </h1>

  {/* Typewriter Effect */}
  <h2 className="mt-4 text-2xl font-semibold text-orange-400">
    <Typewriter
      words={[
        "Frontend Developer",
        "Next.js & React.js Expert",
        "Tailwind CSS Specialist",
        "TypeScript Enthusiast",
        "UI/UX Focused Developer"
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
    I am a skilled <b>Frontend Developer</b> with a deep understanding of modern web technologies.  
    I specialize in <b>Next.js, React.js, TypeScript, and Tailwind CSS</b>, creating responsive, high-performance UI designs  
    with a focus on <b>user experience and accessibility</b>.
  </p>

  {/* CTA Button */}
  <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-all">
    Hire Me
  </button>
</div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Circular Background */}
        <div className="absolute w-96 h-96 rounded-full border-4 border-orange-500 animate-pulse"></div>

        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={CharacterImg}
            alt="Sawaid Profile"
            width={450}
            height={450}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
