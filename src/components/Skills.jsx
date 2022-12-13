import React from 'react'
import aplus from '../images/aplus.png';
import resume from'../resume/resume.pdf'
import Button from 'react-bootstrap/Button';


export default function Skills() {
  return (
    <>

      <div className="SkillsContainer"
        style={{
          display: 'flexStart',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          height: '100vh',
          // border: '1px solid red'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            // border: '1px solid red'
          }}
        >

        </div>
        <div
          className="SkillsIcons"
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',

            // border: '1px solid red'
          }} >

          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-git-plain-wordmark colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-bootstrap-plain-wordmark colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
       
        </div>
        <hr />

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            // border: '1px solid red'
          }}
        >

        </div>

        <div
          className="SkillsIcons"
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '20px'
            // border: '1px solid red'
          }}>

          {/* A plus */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
              // border: '1px solid red'
            }}
          >
            <img src={aplus} alt="comptia-aplus" width="150" />

            <Button className='verify'
              style={{
                color: 'white',
                border: 'none',
                // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset',

              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/316e572c-a299-416e-b155-25314a859555/public_url" target="_blank" rel="noopener">Verify on Cedly
            </Button>
          </div>


          {/* Security plus */}

        </div>

        <hr />

        {/* Resume */}

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            // border: '1px solid red'
          }}
        >

        </div>

        <div
          className="SkillsIcons"
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '20px'
            // border: '1px solid red'
          }}>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'

            }}
          >
            <Button
              target="_blank"
              className='resume'
              style={{
                width: '200px',
                color: 'white',
                border: 'none',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset',
              }}

              href={resume} _blank > View my resume

            </Button>
          </div>

        </div>
        
      </div>

    </>
  )
}

