import React from 'react'
import Weather from '../components/Weather'
import Spacex from './Spacex';
import Artzibit from './Artzibit';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  return (
    <>
      <div
        style={{
          padding: "3rem 2rem",
          backgroundColor: theme.background,
          transition: 'background-color 0.3s ease',
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: theme.pageTitle,
            transition: 'color 0.3s ease',
          }}
        >
          My Projects
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.15rem",
            color: theme.secondaryText,
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
            transition: 'color 0.3s ease',
          }}
        >
          Explore my latest web applications and development work
        </p>
        <div
          className="project-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <Weather />
          <Artzibit />
          <Spacex />
        </div>
      </div>
    </>
  );
}
