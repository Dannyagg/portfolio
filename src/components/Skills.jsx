import React from 'react'

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
          padding: '20px',
          // minHeight: '100%',
          height: '100vh',
          // position:'relative',
          // border: '1px solid red'
        }}
      >
        <div

          className="SkillsIcons"
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
            // border: '1px solid red'
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


      </div>

    </>
  )
}
