import React from 'react'

export default function Skills() {
  return (
    <>
    
      <div className="SkillsContainer"

        style={{

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '100%',
          margin: 'auto',
          padding: '10px',
          // background:'white',
          flexFlow: 'row wrap',
        }}
      >

        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-express-original-wordmark colored"></i>
        <i class="devicon-git-plain-wordmark colored"></i>
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        {/* <i class="devicon-python-plain-wordmark colored"></i> */}
        <i class="devicon-bootstrap-plain-wordmark colored"></i>
        <i class="devicon-postgresql-plain-wordmark colored"></i>
        {/* <i class="devicon-sequelize-plain-wordmark colored"></i> */}

      </div>

    </>
  )
}
