import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProjectList from './components/ProjectList';
import ProjectDetails from './pages/ProjectDetails';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Menu />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
