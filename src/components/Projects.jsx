import React from 'react'
import Weather from '../components/Weather'
// import myWeatherWatch1 from '../images/myWeatherWatch1.png'
// import DemoButton from '../components/DemoButton'

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
          margin: '20px',
          // border: '1px solid red',
        }}>

        <Weather />
        <Weather />
        <Weather />

      </div>



    </>

  )
}
