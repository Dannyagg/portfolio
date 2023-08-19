import React from 'react'
import aplus from '../images/aplus.png';
import netplus from '../images/netplus.png';
import securityplus from '../images/securityplus.png';
import resume2023 from '../resume/resume2023.pdf'
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

        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',

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

          }}>

          {/* A plus */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'

            }}
          >
            <img src={aplus} alt="comptia-aplus" width="150" className='Certs' />

            <Button className='verify'
              style={{
                color: 'white',
                border: 'none',
              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/316e572c-a299-416e-b155-25314a859555/public_url" target="_blank" rel="noopener">Verify on cedly.com
            </Button>
          </div>

          {/*Net plus */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              
            }}
          >
            <img src={netplus} alt="comptia-nplus" width="150" className='Certs' />

            <Button className='verify'
              style={{
                color: 'white',
                border: 'none',
              }}
              variant="outline-primary"
              href="https://www.credly.com/earner/earned/badge/7f28163b-1219-4e2e-87f8-0a05b410cc8d" target="_blank" rel="noopener">Verify on cedly.com
            </Button>
          </div>


          {/* Security plus */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'

            }}
          >
            <img 
            src={securityplus} alt="comptia-aplus" width="150" className='Certs' />

            <Button className='verify'
              style={{
                color: 'white',
                border: 'none',
              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/c81d53d0-28f5-46d4-9d6d-3d4737040ec1/public_url" target="_blank" rel="noopener">Verify on cedly.com
            </Button>
            
          </div>

        </div>
        <hr />
        
        <div
          className="SkillsIcons"
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
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

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >

        </div>

        {/* Resume */}

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',

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
              gap: '1rem',
              borderBottom: '2px solid white',
              borderRight: '2px solid white',
              borderRadius:'10px'

            }}
          >
            <Button
              target="_blank"
              className='resume'
              style={{
                color: 'white',
                border: 'none',
              }}

              href={resume2023} _blank > View my resume

            </Button>

            
          </div>


<div>
  
</div>

        </div>

      </div>

    </>
  )
}

