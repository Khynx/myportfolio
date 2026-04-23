import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AddProjectModal from './components/AddProjectModal';
import { initialProjects } from './data/projects';

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = "Alec Zander Emmanuel F. Hontucan";
  const jobTitle = "Junior Software Developer / Junior Backend Developer";
  const bio = "Aspiring software developer focused on backend development, with experience in Python, databases, and building efficient systems. Passionate about creating practical solutions and continuously improving through hands-on projects.";

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="App">
      <Header />
      <Hero name={name} jobTitle={jobTitle} />
      <About bio={bio} />
      <Projects projects={projects} onAddClick={() => setIsModalOpen(true)} />
      <Contact email="hontucan.aleczander@gmail.com" />
      <Footer />
      <AddProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddProject={handleAddProject}
      />
    </div>
  );
}

export default App;
