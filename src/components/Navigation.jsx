import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Header />
      <nav
        style={{
          display: 'flex',
          alignItem: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          gap: '2rem',
          textShadow: '0.05em 0.05em 0.2em rgba(119, 72, 119, 0.5)'
        }}
      >

        <Link to="/">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
      </nav>
    <hr />
    </>
  )
}
