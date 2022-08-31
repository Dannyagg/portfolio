import React from 'react'
import myWeatherWatch1 from '../images/myWeatherWatch1.png'
import DemoButton from '../components/DemoButton'

export default function Weather() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    margin: 'auto'
                }}
            >
                <img src={myWeatherWatch1} alt="my WeatherWatch"
                    className="project-image"
                    style={{
                        width: '22rem',
                        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset',
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
                    <h3> Weather Watch Application</h3>

                    <p>
                        React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
                    </p>

                    <DemoButton />
                </div>

            </div>


        </>
    )
}