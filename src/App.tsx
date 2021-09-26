import React from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
		 <About />
		 <Projects />
		 <Skills />
		 <Experience />
		 <Footer />
    </div>
  );
}

export default App;
