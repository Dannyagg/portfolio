import React from 'react'
import Weather from '../components/Weather'
import Spacex from './Spacex';
import Artzibit from './Artzibit';

export default function Projects() {
  return (
    <>
      <div
        className="project-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
         
        }}>

        <Weather />
        <Artzibit />
        <Spacex />

      </div>

    </>

  )
}
