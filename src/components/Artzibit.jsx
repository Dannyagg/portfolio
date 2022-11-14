import React from 'react'
import artzibitimage from '../images/artzibitimage.png'
import DemoButton from '../components/DemoButton'
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Artzibit() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    margin: 'auto',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset',

                }}
            >
                <img src={artzibitimage} alt="my WeatherWatch"
                    className="project-image"
                    style={{
                        width: '18rem',
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
                    <h3> ArtZibit E-commerce  </h3>

                    <p>
                        An e-commerce web application developed with Reactjs, Javascript, CSS, and HTML. The application allows users to shop for products on a website that meets modern trends. The website is responsive and simple, allowing customers to have a great user experience.
                        Accomplished all developments and deployment tasks
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
                                url='https://youtu.be/8psqnjvWQjg'

                            />
                        </div>

                        <div>
                            <OpenInNewSharpIcon
                                onClick={() => window.open('https://artzibit.netlify.app/')}
                            /> website
                        </div>

                        <div>
                            <GitHubIcon
                                onClick={() => window.open('https://github.com/Dannyagg/my-gallery')}
                            /> github repo
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}