/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'


export default function Footer() {
    return (

        <>
            <div className='footer'>

                <div className='social'>

                    <h4> Follow Me </h4>

                    <a href='https://github.com/Dannyagg' target='_blank' title='my github repo'className='fa fa-github' rel="noreferrer"></a>
                    <a href='https://www.linkedin.com/in/daniel-a-5a9294149/' target='_blank' title='linkedin' className='fa fa-linkedin' rel="noreferrer"></a>
                    <a href='https://twitter.com/Jayborga' target='_blank' title='twitter' className='fa fa-twitter' rel="noreferrer"></a>

                </div>
                
                <h6> &copy; {new Date().getFullYear()} Daniel Agbenu </h6>

            </div>
        </>
    )
}


