/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

const Business = () => {
    const Box = {
        width: '200px',
        height: '200px',
        padding: '10%',
        borderRadius: '8px',
        backgroundColor: '#FFF',
        boxShadow: ' 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
        textAlign: 'center',
    };
    return (
        <>
            <div sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: ['100vh', 'fit-content'],
                overflow: 'hidden',
                alignItems: 'center',
                padding: '0 0 4rem 0',
                ['@media (max-width: 576px)']: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: 'fit-content',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }
            }}>
                <div sx={{
                    display: 'flex',
                    gap: '16px',
                    width: ['100%', '70%'],
                    margin: '40px 0 0 6rem',
                    ['@media (max-width: 576px)']: {
                        display: 'flex',
                        order: '2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0px',
                    }
                }}>
                    <div sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <div style={Box}>first</div>
                        <div style={Box}>second</div>
                    </div>
                    <div sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        marginTop: '16%'
                    }}>
                        <div style={Box}>third</div>
                        <div style={Box}>four</div>
                    </div>
                </div>
                <div sx={{
                    ['@media (max-width: 576px)']: {
                        display: 'flex',
                        flexDirection: 'column',
                        order: '1',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }}>
                    <div sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginBottom: '2.6rem',
                        width: ['100%', '90%'],
                        ['@media (max-width: 576px)']: {
                            display: 'flex',
                            padding: '0 2rem',
                            marginBottom: '1.4rem',
                        }
                    }}>
                        <h1 sx={{
                            fontSize: '52px',
                            fontWeight: '600',
                            color: '#6E1971',
                            lineHeight: '55px',
                            marginBottom: '1.5rem',
                            ['@media (max-width: 576px)']: {
                                fontSize: '40px',
                                lineHeight: '43px',
                            }
                        }}>We’re here to help for your business</h1>
                        <p sx={{
                            color: '#353535',
                            lineHeight: '27px',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            ['@media (max-width: 576px)']: {
                                lineHeight: '22px',
                            }
                        }}>This to inform you that we are in a rush to provide  the good things to the world for the people to cherish and live</p>
                        <button sx={{
                            background: 'linear-gradient(90deg, #601C6F -82.14%, #C01F6C 175.65%)',
                            color: '#FFF',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            width: 'fit-content',
                            outline: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            lineHeight: '27px',
                            transition: 'background 0.5s ease',
                            boxShadow: '0px 5px 10px #888888',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #C01F6C -82.14%, #601C6F 175.65%)',
                            },
                        }}>know more</button>
                    </div>
                    <div sx={{
                        position: 'relative',
                    }}>
                        <div sx={{
                            width: ['100%', '70%'],
                            objectFit: 'cover',
                            marginLeft: '14rem',
                            ['@media (max-width: 576px)']: {
                                width: ['80%', '100%'],
                                margin: '0 0 3rem 7rem',
                            }
                        }}>
                            <StaticImage src="https://i.ibb.co/CV5pJ2z/g10.png" alt="Programmer" />
                        </div>
                        <div sx={{
                            width: ['100%', '70%'],
                            height: 'auto',
                            objectFit: 'contain',
                            position: 'absolute',
                            marginLeft: '14rem',
                            bottom: '-10%',
                            left: '0',
                            zIndex: '-1',
                            ['@media (max-width: 576px)']: {
                                margin: '0 0 3rem 5rem',
                                width: ['85%', '100%'],
                            }
                        }}>
                            <StaticImage src="https://i.ibb.co/JBzD3YL/Vector-1.png" alt="Vector" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Business;
