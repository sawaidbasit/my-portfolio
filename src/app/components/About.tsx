const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* About Me Section */}
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          I’m a passionate Full Stack Developer with expertise in the MERN
          stack. I specialize in building scalable, performant, and responsive
          web applications that offer seamless user experiences. With a strong
          foundation in both frontend and backend technologies, I enjoy bringing
          ideas to life through clean code and thoughtful design.
        </p>

        {/* Skills Section */}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div
              className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all 
      hover:shadow-2xl hover:border-gray-600 col-span-2"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-300">
                <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript
              </p>
              <p className="text-gray-300">
                <strong>Frameworks & Libraries:</strong> React.js, Next.js,
                Material-UI, Mantine, Bootstrap, Tailwind CSS, Chart.js
              </p>
            </div>

            {/* Backend Development */}
            <div
              className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all 
      hover:shadow-2xl hover:border-gray-600 col-span-2"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Backend Development
              </h3>
              <p className="text-gray-300">
                <strong>Frameworks:</strong> Node.js, Express.js, NestJS
              </p>
              <p className="text-gray-300">
                <strong>Databases:</strong> MongoDB, MySQL
              </p>
            </div>

            {/* Tools & Version Control */}
            <div
              className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all 
      hover:shadow-2xl hover:border-gray-600 col-span-2"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Tools & Version Control
              </h3>
              <p className="text-gray-300">Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
