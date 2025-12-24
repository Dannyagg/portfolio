import React from 'react'
import Mailto from 'reactv16-mailto';
import { BiEnvelope } from 'react-icons/bi';
import { useTheme } from '../context/ThemeContext';

export function Email() {
  const { theme } = useTheme();

  return (
  <>
  <Mailto email="dannyajunior@yahoo.com" obfuscate={true}
    className="mailto"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      color: theme.primaryText,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    }}>
    <BiEnvelope
      title='Contact Me'
      className="envelope"
      style={{
        fontSize: '30px',
        color: theme.primaryText,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }} />
  </Mailto>
  
  </>
  );
}
export default Email;