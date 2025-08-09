import React from 'react'
import space from '../images/space.png'
import DemoButton from './DemoButton'
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Spacex(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset',

                }}
            >
                <img src={space} alt="space-tracker"
                    className="project-image"
                    style={{
                        width: '20rem',
                        padding: '10px'

                    }}
                />

                <div
                    className="description-container"
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        padding: '10px',
                        maxWidth: '40rem',

                    }}
                >
                    <h3> Space X Launch Tracker</h3>

                    <p>
                        Developed user interface for a front-end web application that tracks SpaceX's past and future space launches. Technologies used include JavaScript, HTML, and CSS SpaceX API, Bootstrap.
                    </p>

                    <div
                        className="site-links"

                        style={{
                            display: 'flex',
                            flexFlow: 'row-wrap',
                            alignItems: 'center',
                            gap: '1rem'

                        }}>
                        <div>
                            <DemoButton

                                url='https://youtu.be/uCGkNDkwoO0'

                            />
                        </div>

                        <div>
                            <OpenInNewSharpIcon
                                onClick={() => window.open('https://laughing-rosalind-85b6a0.netlify.app/index.html')}
                            /> website
                        </div>

                        <div>
                            <GitHubIcon
                                onClick={() => window.open('https://github.com/logancooper/SpaceXFanSite')}
                            /> github repo
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}