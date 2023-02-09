/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { Menu } from '@styled-icons/feather/Menu'

const Main = () => {
    return (
        <>
            <div sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                paddingLeft: '86px',
                ['@media (max-width: 576px)']: {
                    padding: ' 2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                    width: '100%',

                }
            }}>

                <div sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ['@media (max-width: 576px)']: {
                        order: '2',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '0 0.25rem',
                    }

                }}>
                    <div sx={{
                        position: 'absolute',
                        top: '3%',
                        ['@media (max-width: 576px)']: {
                            position: 'initial',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            alignItems: 'center',
                            marginBottom: '2.4rem',
                        }
                    }}>
                        <h2 sx={{
                            color: '#441459',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            width: 'fit-content',
                            ['@media (max-width: 576px)']: {
                                fontSize: '1.8rem',
                            }
                        }}>hyge</h2>
                        <button sx={{
                            background: 'transparent',
                            outline: 'none',
                            border: 'none',
                            display: 'none',
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
                                fontSize: '62px',
                                height: '115px',
                                width: '600px',
                                margin: '2.8rem 0px',
                                fontWeight: '600',
                                lineHeight: '66.97px',
                                ['@media (max-width: 576px)']: {
                                    fontSize: '32px',
                                    lineHeight: '34.57px',
                                    width: 'fit-content',
                                    height: '62px',
                                    margin: '2rem 0'
                                },
                            }}>Our analysis is your final results</h1>
                            <p sx={{
                                color: '#353535',
                                lineHeight: '27px',
                                width: '477px',
                                fontSize: '16px',
                                fontWeight: '400',
                                height: '70px',
                                ['@media (max-width: 576px)']: {
                                    fontSize: '16px',
                                    lineHeight: '18px',
                                    width: 'fit-content',
                                    height: '39px',
                                    marginBottom: '2.4rem',
                                },
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
                        <img sx={{
                            width: '1000px',
                            height: '700px',
                            ['@media (max-width: 576px)']: {
                                order: '1',
                                width: 'fit-content',
                                height: '320px',
                                objectFit: 'contain',
                            },
                        }} src="https://i.ibb.co/rMFHf4F/Group-3.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
