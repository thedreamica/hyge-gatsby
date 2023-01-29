/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Solution = () => {
    return <div sx={{
        backgroundImage: 'url(https://i.imgur.com/GKhFHCq.png)',
        height: '100vh',
        width: '100vw',
        padding: ['86px 34px', '86px 104px'],
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        display: 'flex',
        flexDirection: 'row-reverse'
    }}>
       <div>
       <p>
            We're a creative agency
        </p>
        <p>
            Solution Team
        </p>
        <p>
            We're a creative agency based in chennai, Our company is best performing, helping businesses finding projects
        </p>
        <button>
            Know more
        </button>
       </div>
       <div>
        <StaticImage src="https://i.imgur.com/M0J1cHc.png" />
       </div>
    </div>
}

export default Solution