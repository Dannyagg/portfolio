import React from 'react'
import Header from '../components/Header';
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Navigation() {
  const location = useLocation();
  const { theme, isDark, toggleTheme } = useTheme();

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? theme.navActiveText : theme.navText,
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    position: 'relative',
    fontWeight: location.pathname === path ? '700' : '500',
    borderBottom: location.pathname === path ? `2px solid ${theme.navActiveText}` : '2px solid transparent',
  });

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = theme.navHoverText;
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = `0 8px 16px ${theme.shadowColor}`;
  };

  const handleMouseLeave = (e, path) => {
    e.currentTarget.style.color = location.pathname === path ? theme.navActiveText : theme.navText;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <>
      <Header />
      <nav
        style={{
          backgroundColor: theme.navBackground,
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 2rem',
          textShadow: '0.05em 0.05em 0.2em rgba(119, 72, 119, 0.5)',
          borderBottom: `1px solid ${theme.cardBorder}`,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div style={{ flex: 1 }} />
        
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
          <Link
            to="/"
            style={getLinkStyle('/')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={(e) => handleMouseLeave(e, '/')}
          >
            About
          </Link>
          <Link
            to="/Skills"
            style={getLinkStyle('/Skills')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={(e) => handleMouseLeave(e, '/Skills')}
          >
            Certifications
          </Link>
          <Link
            to="/Projects"
            style={getLinkStyle('/Projects')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={(e) => handleMouseLeave(e, '/Projects')}
          >
            Projects
          </Link>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: theme.navText,
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.color = theme.navHoverText;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = theme.navText;
            }}
            title="Toggle dark mode"
          >
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </button>
        </div>
      </nav>
      <hr />
    </>
  )
}
