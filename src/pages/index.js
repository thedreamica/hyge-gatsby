/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import GlobalStyles from "../styles/globalStyles"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
    <GlobalStyles/>
    <div sx={{
      background: ['none','linear-gradient(121.53deg, #FFFFFF -3.47%, rgba(255, 255, 255, 0) 84.63%)'],
      width: '100vw',
      height: '100vh',
      padding: ['86px 34px', '86px 104px'],
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <p sx={{
        fontSize: ['5vw','2vw'],
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
        display: ['block','none']
      }}>
      <StaticImage placeholder="Blurred" src="https://i.imgur.com/loyUj6d.png" />
      </div>
      <p sx={{
        fontSize: ['3vh','3vw'],
        lineHeight: '130%',
        color: '#8f236d',
        fontWeight: 'bold',
        marginTop: ['4vh','10%'],
        width: ['100%', '45%'],
        textAlign: ['center', 'left']
      }}>
        Unlock your company's potential with
        our tailored solutions
      </p>
      <p sx={{
        fontSize: ['2vh','2vh'],
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
        width: '100vw',
        left: 0,
        bottom: 0,
        display: ['none','block'],
        zIndex: -1
      }}>
      <StaticImage placeholder="Blurred" src="https://i.imgur.com/dckkyQ1.png" />
      </div>
      <button sx={{
        fontSize: ['16px', '22px'],
        height: '52px',
        borderRadius: '12px',
        padding: ['','0 12px'],
        outline: 'none',
        border: 'none',
        backgroundColor: 'white',
        color: '#3D1357',
        fontWeight: 600,
        marginTop: ['6vh','1.4%'],
        boxShadow: '3px 2px 11px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        width: ['100%', 'fit-content']
      }}>
        Get in touch
      </button>
      <div sx={{
        position: 'absolute',
        width: '100vw',
        left: 0,
        bottom: 0,
        display: ['block','none'],
        zIndex: -1
      }}>
      <StaticImage placeholder="Blurred" src="https://i.imgur.com/7xJnqHZ.png" />
      </div>
    </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
