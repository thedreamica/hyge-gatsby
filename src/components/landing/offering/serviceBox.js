import React from 'react';
/** @jsx jsx */
import { jsx } from "theme-ui"

const ServiceBox = ({
    iconBg,
    icon,
    title,
    description
}) => {
    return <div sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10%',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px 0px rgba(255,255,255,0.35)',
        background: 'white',
        alignItems: 'center'
    }}>
        <div sx={{
            borderRadius: '100%',
            background: iconBg,
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <p sx={{
            fontWeight: 600,
            textAlign: 'center',
            fontSize: ['18px','21px']
        }}>
            {title}
        </p>
        <p sx={{
            textAlign: 'center',
            marginTop: '8px',
            fontSize: ['12px','15px']
        }}>
            {description}
        </p>
    </div>
}

export default ServiceBox