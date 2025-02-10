import AboutMe from "./components/About";
import ContactMe from "./components/ConatactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe/>
      <Projects/>
      <Testimonials/>
      <ContactMe/>
    </main>
  );
}
