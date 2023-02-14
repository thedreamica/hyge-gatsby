/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { Menu } from '@styled-icons/feather/Menu'
import { StaticImage } from "gatsby-plugin-image"

const Main = () => {
    return (
        <>
            <div sx={{
                width: '100%',
                height: '100%',
                paddingLeft: '86px',
                margin: '0 0 6rem 0',
                ['@media (max-width: 576px)']: {
                    padding: '0.85rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                    margin: '0 0 1.5rem 0',
                }
            }}>
                <div sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    ['@media (max-width: 576px)']: {
                        order: '2',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '0 0.25rem',
                    }
                }}>
                    <div sx={{
                        position: 'absolute',
                        top: '1%',
                        ['@media (max-width: 576px)']: {
                            position: 'initial',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            alignItems: 'center',
                            margin: '0rem 0 2rem 0',
                        }
                    }}>
                        <h2 sx={{
                            color: '#441459',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            width: 'fit-content',
                            ['@media (max-width: 576px)']: {
                                fontSize: '2rem',
                            }
                        }}>hyge</h2>
                        <button sx={{
                            background: 'transparent',
                            outline: 'none',
                            border: 'none',
                            display: 'none',
                            cursor: 'pointer',
                            ['@media (max-width: 576px)']: {
                                display: 'block',
                            }
                        }}> <Menu size={42} /> </button>
                    </div>
                    <div sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        ['@media (max-width: 576px)']: {
                            justifyContent: 'center',
                            flexDirection: 'column',
                            paddingBottom: '2rem',
                        }
                    }}>
                        <div sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            ['@media (max-width: 576px)']: {
                                order: '2',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }
                        }}>
                            <h1 sx={{
                                fontSize: '60px',
                                fontWeight: '600',
                                color: '#6E1971',
                                lineHeight: '67px',
                                width: '70%',
                                marginBottom: '1.5rem',
                                ['@media (max-width: 576px)']: {
                                    fontSize: '40px',
                                    lineHeight: '43px',
                                    width: 'fit-content',
                                }
                            }}>Our analysis is your final results</h1>
                            <p sx={{
                                color: '#353535',
                                lineHeight: '27px',
                                fontSize: '16px',
                                fontWeight: '600',
                                width: '50%',
                                marginBottom: '1rem',
                                ['@media (max-width: 576px)']: {
                                    lineHeight: '22px',
                                    width: 'fit-content',
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
                            height: 'auto',
                            width: 'auto',
                            ['@media (max-width: 576px)']: {
                                order: '1',
                                width: 'fit-content',
                                height: 'auto',
                                objectFit: 'contain',
                                marginBottom: '2rem',
                            },
                        }}>
                            <StaticImage src="https://i.ibb.co/rMFHf4F/Group-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;
