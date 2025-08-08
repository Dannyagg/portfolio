
import React from 'react';
import me2 from '../images/me2.jpg';
import Email from './Email';

export default function About() {
  return (
    <>
      <div className="AboutWrapper"
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          padding: '20px',
          // minHeight: '100vh',
          // border: '1px solid red'
        }}
      >
        <div className="about-photo">
          <img src={me2} alt=""
            style={{
              width: '20rem',
              padding: '5px',
              margin: '5px',
              borderRadius: '2%',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
            }}
          />
        </div>

        <div className="about-message"
          style={{
            width: '32rem',
            padding: '10px',
            margin: '5px',
            backgroundColor: '#fbfaf9c8',
            color: 'black',
            borderRadius: '1%',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset'
          }}
        >
          <h2
            style={{
              display: 'flex',
            }}
          > Daniel Agbenu </h2>
<h6
            style={{
              display: 'flex',
            }}
          > IT Networking | Cybersecurity</h6>

 <h6
            style={{
              display: 'flex',
            }}
          > CCNA | CompTIA Net+, Sec+, A+ | ITIL4 Foundation Certified </h6>
       
          
          <hr />

          <p
            style={{
              fontSize: '20px',
              color: '#141109'
            }}>
            Information Technology professional with a passion for innovation and continuous learning. My goal is to implement cutting-edge technology solutions to enhance and safeguard IT infrastructure. </p>

          <hr />
          
          <div
            className="contact-email"
            style={{
              display: 'flex',
              gap: '0.5rem'
            }}>

            
            <Email />
          </div>

        </div>

      </div>

    </>
  )
}





