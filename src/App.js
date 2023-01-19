import './App.css'
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skill from './components/Skill/skill';
// import Project from './components/Project/project';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
