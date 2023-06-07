import React from 'react'
import Mailto from 'reactv16-mailto';
import { BiEnvelope } from 'react-icons/bi';

export function Email() {
  return (
  <>
  <Mailto email="dannyajunior@yahoo.com" obfuscate={true}
    className="mailto"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      color: '#392304',
      textDecoration: 'none'
    }}>

    <BiEnvelope
      title='Contact Me'
      className="envelope"
      style={{
        fontSize: '30px',
      }} />
  </Mailto>
  
  </>
  );
}
export default Email;