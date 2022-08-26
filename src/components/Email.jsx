import React from 'react'
import Mailto from 'reactv16-mailto';
import { BiEnvelope } from 'react-icons/bi';

export function Email() {
  return (
    <Mailto email="borgadee@gmail.com" obfuscate={true} 
      className="mailto"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#392304',
        textDecoration: 'none'
      }}>
      <BiEnvelope 
        title='Click to email Me'
        className="envelope"
        style={{
          fontSize: '40px',
        }} />
    </Mailto>
  );
}
export default Email;