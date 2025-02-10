const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* About Me Section */}
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          A dedicated frontend developer with expertise in creating
          user-centric, visually appealing, and high-performing websites and
          applications. Proficient in modern JavaScript frameworks and
          libraries, with a strong focus on responsive design and optimal user
          experiences.
        </p>

        {/* Skills Section */}
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">
              Backend Development
            </h3>
            <p className="text-gray-300">
              <strong>Frameworks:</strong> Node.js, Express.js
            </p>
            <p className="text-gray-300">
              <strong>Database:</strong> MongoDB
            </p>
          </div>

          {/* Tools & Version Control */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-2">
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">
              Tools & Version Control
            </h3>
            <p className="text-gray-300">Git, GitHub, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
