import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Link } from "react-router-dom";

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route>
          <Route path="/" element={<About />} />
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
                  minHeight: '60vh',
                  backgroundColor: theme.background,
                  transition: 'background-color 0.3s ease',
                }}>
                <p 
                  id="error"
                  style={{
                    color: theme.primaryText,
                    transition: 'color 0.3s ease',
                  }}
                >There's nothing here! Return to <span><Link to="/" style={{ color: theme.pageTitle, textDecoration: 'underline' }}>Home Page</Link></span></p>
              </main>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
