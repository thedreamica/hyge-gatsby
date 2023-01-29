/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import React from 'react';


const Agency = () => {
    return <div sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        gap: '8%',
        height: '100vh',
        padding: ['86px 34px', '86px 104px'],
        alignItems: 'center'
    }}>
        <div sx={{
            width: ['100%','65%']
        }}>
            <StaticImage src="https://i.imgur.com/cs8a01P.png" />
        </div>
        <div sx={{
            display: 'flex',
            flexDirection: 'column',
            width: ['100%','35%']
        }}>
            <p sx={{
                color: '#5a1c6f'
            }} >
                Agency
            </p>
            <p sx={{
                fontSize: '30px',
                fontWeight: 600,
                marginBottom: '8px',
                textAlign: ['left', 'none']
            }}>
                We create a lot of work
            </p>
            <p sx={{
                fontSize: '16px',
                marginBottom: '8px',
                width: '70%',
                textAlign: ['left', 'none']
            }}>
                Creative agency landing page design, I'm excited to show you the new project . Hope you like the project
            </p>
            <button sx={{
          fontSize: '16px',
          height: '52px',
          borderRadius: '12px',
          padding: ['', '0 12px'],
          outline: 'none',
          border: 'none',
          backgroundColor: 'white',
          color: '#3D1357',
          fontWeight: 600,
          marginTop: ['6vh', '1.4%'],
          boxShadow: '3px 2px 11px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          width: ['100%', 'fit-content']
        }}>
          Find out more
        </button>
        </div>
    </div>
}

export default Agency