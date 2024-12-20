import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';  // Add the import
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />  {/* Add the Home section */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
