
import React from 'react';
import me from '../images/me.jpg';
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
          <img src={me} alt=""
            style={{
              width: '22rem',
              height: '22rem',
              padding: '5px',
              margin: '10px',
              borderRadius: '10%',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
            }}
          />
        </div>

        <div className="about-message"
          style={{
            width: '22rem',
            height: '18rem',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#fbfaf9c8',
            color: 'black',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset'
          }}
        >
          <h2
            style={{
              display: 'flex',
            }}
          > Daniel Agbenu Jr </h2>
          <hr />

          <p
            style={{
              fontSize: '20px',
              color: '#141109'
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus sunt iste incidunt? Natus architecto labore dignissimos
            reprehenderit tenetur aperiam rem </p>

          {/* <hr /> */}

          <div
            className="contact-email"
            style={{
              display: 'flex',
              // alignItems: 'center',
              gap: '0.5rem'
            }}>

            <p>email me </p>
            <Email />
          </div>
        </div>

      </div>

     

    </>
  )
}





