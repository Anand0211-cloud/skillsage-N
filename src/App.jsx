import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CybersecuritySolutions from './pages/Cybersecurity';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import ServiceTemplate from './pages/ServiceTemplate';
import Training from './pages/Training';
import TrainingCategory from './pages/TrainingCategory';
import GenerativeAI from './pages/GenerativeAI';
import CourseTemplate from './pages/CourseTemplate';
import Consultancy from './pages/Consultancy';
import ConsultancyDetail from './pages/ConsultancyDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/cybersecurity-solutions" element={<CybersecuritySolutions />} />
          <Route path="services/software-development" element={<SoftwareDevelopment />} />
          <Route path="services/website-development" element={<WebsiteDevelopment />} />
          <Route path="services/:slug" element={<ServiceTemplate />} />
          <Route path="consultancy" element={<Consultancy />} />
          <Route path="consultancy/:slug" element={<ConsultancyDetail />} />
          <Route path="training" element={<Training />} />
          <Route path="training/category/:categorySlug" element={<TrainingCategory />} />
          <Route path="training/generative-ai-masterclass" element={<GenerativeAI />} />
          <Route path="training/:slug" element={<CourseTemplate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
