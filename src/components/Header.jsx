import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';


export default function Header() {
  const { theme } = useTheme();
  
  return (
    <HeaderWrapper>
      <div className="heading">
        <Link to="/"> <h1
          style={{
            color: theme.primaryText,
            fontSize: '60px',
            textShadow: theme.primaryText === '#ffffff' ? '4px 4px 4px #000a06' : 'none',
            padding: '20px',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
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


