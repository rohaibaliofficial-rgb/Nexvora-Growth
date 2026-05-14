/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
}
