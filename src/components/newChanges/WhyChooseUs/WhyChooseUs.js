/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { ShieldCheck } from '@styled-icons/bootstrap/ShieldCheck'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'
import ChooseData from "./Choose-Data";

const WhyChooseUs = () => {
    const iconMap = {
        Shield: ShieldCheck,
        HeartFill: HeartFill,
        PersonFill: PersonFill,
    };
    return (
        <>
            <div sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                margin: '5rem 0 10rem 0',
                ['@media (max-width: 576px)']: {
                    flexDirection: 'column',
                    marginTop: '40rem',
                }
            }}>
                <div sx={{
                    backgroundImage: 'url(https://i.ibb.co/3B9G521/Vector-6.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#FFF',
                    padding: '8.5rem 6.5rem',
                    width: ['100%', 'fit-content'],
                    height: ['100vh', 'fit-content'],
                    ['@media (max-width: 576px)']: {
                        order: '2',
                        margin: '15rem 0 30rem 0',
                        width: ['fit-content', '100%'],
                        height: ['fit-content', '100vh'],
                        padding: '4rem 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }
                }}>
                    <div sx={{
                        marginBottom: '3.5rem',
                        ['@media (max-width: 576px)']: {
                            marginBottom: '1rem',
                        },
                    }}>
                        <h1 sx={{
                            fontSize: '52px',
                            fontWeight: '600',
                            lineHeight: '55px',
                            marginBottom: '1.2rem',
                            ['@media (max-width: 576px)']: {
                                fontSize: '40px',
                                lineHeight: '43px',
                            }
                        }}>Why choose us</h1>
                        <p sx={{
                            width: '410px',
                            lineHeight: '23px',
                            fontSize: '16px',
                            fontWeight: '400',
                            marginBottom: '1rem',
                            ['@media (max-width: 576px)']: {
                                lineHeight: '22px',
                            }
                        }}>This to inform you that we are in a rush to provide  the good things to the world for the people to cherish and live</p>
                    </div>
                    {ChooseData.map((item) => {
                        const { id, title, text, icon } = item;
                        const IconComponent = iconMap[icon];
                        return (
                            <div key={id} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '2rem 0',
                                ['@media (max-width: 576px)']: {
                                    padding: '0 2rem',
                                    margin: '0.75rem 0',
                                    flexDirection: 'column',
                                }
                            }}>
                                <button sx={{
                                    background: 'transparent',
                                    outline: 'none',
                                    border: 'none',
                                    color: '#FFF',
                                    marginRight: '1.3rem',
                                    ['@media (max-width: 576px)']: {
                                        margin: '1rem 0',
                                        marginRight: '0.98rem',
                                    }
                                }}>
                                    <IconComponent size={50} />
                                </button>
                                <div sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    ['@media (max-width: 576px)']: {
                                        alignItems: 'center',
                                    }
                                }}>
                                    <h4 sx={{
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        lineHeight: '23px',
                                        marginBottom: '0.25rem',
                                        ['@media (max-width: 576px)']: {
                                            marginBottom: '0.75rem',
                                        }
                                    }}>{title}</h4>
                                    <p sx={{
                                        fontWeight: '300',
                                        width: '606px',
                                        fontSize: '1rem',
                                        ['@media (max-width: 576px)']: {
                                            width: ['100%', 'fit-content'],
                                            fontSize: '0.95rem',
                                            lineHeight: '20px',
                                            fontWeight: '400',
                                        }
                                    }}>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                    <button sx={{
                        background: '#FFF',
                        color: '#511860',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        width: 'fit-content',
                        outline: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        lineHeight: '27px',
                        ['@media (max-width: 576px)']: {
                            marginTop: '2rem',
                        }
                    }}>know more</button>
                </div>
                <div sx={{
                    width: '50%',
                    borderRadius: '1rem',
                    objectFit: 'cover',
                    ['@media (max-width: 576px)']: {
                        order: '1',
                        width: ['fit-content', '100%'],
                        height: '200px',
                        margin: '0rem 1.5rem'
                    }
                }}>
                    <StaticImage sx={{ borderRadius: '25px', }} src="https://i.ibb.co/chmP7rX/pexels-fauxels-3183197-1.png" />
                </div>
            </div>
        </>
    )
};

export default WhyChooseUs;
