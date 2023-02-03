import './App.css';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skill from './components/Skill/skill';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/navbar'
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </ToastProvider>
  );
}

export default App;
