import Header from './components/Header';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

import './App.css';
import batmanImage from './images/Batman.jpg';

function App() {
  return (
    <div className="App">
      <Header />

      <HomeSection />

      <AboutSection />

      <ProjectSection batmanImage={batmanImage} />

      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
