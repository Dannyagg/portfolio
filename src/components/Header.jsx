import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <HeaderWrapper>
      <div className="heading">
        <Link to="/"> <h1
          style={{
            color: 'white',
            fontSize: '50px',
            textShadow: '4px 4px 4px #000a06',
            padding: '30px'
          }}

        > My Portfolio</h1> </Link>
      </div>
    </HeaderWrapper>
  )
}
const HeaderWrapper = styled.section`
  display:flex;
  flex-flow: row wrap;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: #77707052;
`;


