import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Lab from "./sections/Lab";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Initial loading animation */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar />

      {/* Main portfolio */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Lab />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;