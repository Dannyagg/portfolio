import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Link } from "react-router-dom";

// import Navigation from './components/Navigation';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Routes>
        <Route>
          <Route path="/" element={<About />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  display: 'flex',
                  fontSize: '36px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <p 
                id="error" >There's nothing here! Return to <span><Link to="/">Home Page</Link></span>  </p>

              </main>
            }
          />
        </Route>
      </Routes>
      <Footer />
       
    </div>
  );
}

export default App;
