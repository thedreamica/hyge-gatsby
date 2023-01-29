/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import ServiceBox from './serviceBox';
import { SecurePayment } from '@styled-icons/remix-line/SecurePayment'
import { Sparkle } from '@styled-icons/fluentui-system-filled/Sparkle'
import { Codepen } from '@styled-icons/boxicons-logos/Codepen'
import { Flutter } from '@styled-icons/boxicons-logos/Flutter'
import { StaticImage } from "gatsby-plugin-image"


const Offering = () => {
    return <div sx={{
        display: 'flex',
        padding: ['86px 34px', '86px 104px'],
        flexDirection: ['column-reverse', 'row'],
        gap: '8%',
        background: 'linear-gradient(0deg, rgba(199,34,108,1) 0%, rgba(90,28,112,1) 100%)',
        height: ['fit-content','100vh'],
        alignItems: 'center'
      }}>
        <div sx={{
          display: 'flex',
          gap: '16px',
          marginTop: ['40px', 0]
        }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <ServiceBox icon={<SecurePayment size="50px" />} title="Interactive design" description="No comments yet! Add one to start the conversation." />
            <ServiceBox icon={<Sparkle size="50px" />} title="Motion design" description="No comments yet! Add one to start the conversation." />
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16%'
          }}>
            <ServiceBox icon={<Codepen size="50px" />}  title="Virtual discovery" description="No comments yet! Add one to start the conversation." />
            <ServiceBox icon={<Flutter size="50px" />} title="Digital research" description="No comments yet! Add one to start the conversation." />
          </div>
        </div>
        <div>
          <p sx={{
            color: '#fef540'
          }} >
            We're offering
          </p>
          <p sx={{
            color: 'white',
            fontSize: '30px',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            Creative agency landing page
          </p>
          <p sx={{
            color: 'white',
            width: '70%',
            fontSize: '16px',
            marginBottom: '8px'
          }}>
            Creative agency landing page design, I'm excited to show you the new project . Hope you like the project , End of project work,
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
          Know more
        </button>
        </div>
      </div>
}

export default Offering