/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import React from 'react';


const Hero = () => {
    return  <div sx={{
        // background: 'linear-gradient(180deg, rgba(48, 19, 103, 0) 50.03%, #5A1C70 91.85%)',
        width: '100vw',
        height: '100vh',
        padding: ['86px 34px', '86px 104px'],
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <p sx={{
          fontSize: ['5vw', '2vw'],
          fontFamily: 'Source Code Pro',
          color: 'primary',
          fontWeight: 'bold',
          textAlign: ['center', 'left']
        }}>
          hyge
        </p>
        <div sx={{
          width: '100%',
          marginTop: '7vh',
          display: ['block', 'none']
        }}>
          <StaticImage placeholder="Blurred" src="https://i.imgur.com/loyUj6d.png" />
        </div>
        <p sx={{
          fontSize: ['3vh', '3vw'],
          lineHeight: '130%',
          color: '#8f236d',
          fontWeight: 'bold',
          marginTop: ['4vh', '10%'],
          width: ['100%', '45%'],
          textAlign: ['center', 'left']
        }}>
          Unlock your company's potential with
          our tailored solutions
        </p>
        <p sx={{
          fontSize: ['2vh', '2vh'],
          display: ['none', 'flex'],
          lineHeight: '3vh',
          fontWeight: '400',
          width: '45%',
          color: 'primary',
          marginTop: ['1.4%']
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
        <div sx={{
          position: 'absolute',
          width: '50vw',
          height: '74vh',
          right: 0,
          bottom: 0,
          display: ['none', 'block'],
          zIndex: -1
        }}>
          <StaticImage Constrained="FULL_WIDTH" placeholder="Blurred" src="https://i.imgur.com/1e9GTYc.png" />
        </div>
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
          Get in touch
        </button>
      </div>
}

export default Hero