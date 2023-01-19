import './App.css';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skill from './components/Skill/skill';
// import Project from './components/Project/project';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
      {/* <div className="App"> */}
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Contact />
      {/* </div> */}
    </ToastProvider>
  );
}

export default App;
