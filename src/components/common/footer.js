/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle'
import { Web } from '@styled-icons/foundation/Web'

const Footer = () => {
    return <footer sx={{
        padding: ['86px 34px', '86px 16%'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }}>
        <div sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '50px'
        }}>
            <div sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
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
                <p>
                    75,main road, new jersey
                </p>
                <p>
                    +91 8776655443
                </p>
                <p>
                    thedremica@gmail.com
                </p>
                <div sx={{
                    display: 'flex',
                    gap: '16px'
                }}>
                    <FacebookCircle size="30px" />
                    <LinkedinWithCircle size="30px" />
                    <TwitterWithCircle size="30px" />
                    <Web size="30px" />
                </div>
            </div>
            <div sx={{
                display: 'flex',
                width: '30%',
                justifyContent: 'space-between'
            }}>
                <div sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    <p>
                        <b>
                            Company
                        </b>
                    </p>
                    <p>
                        About
                    </p>
                    <p>
                        Contact
                    </p>
                    <p>
                        Home
                    </p>
                    <p>
                        Insights
                    </p>
                    <p>
                        Service & clients
                    </p>
                    <p>
                        Work
                    </p>
                </div>
                <div sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    <p>
                        <b>Solution</b>
                    </p>
                    <p>
                        Digital marketing
                    </p>
                    <p>
                        prototype
                    </p>
                    <p>
                        Developement
                    </p>
                    <p>
                        Design
                    </p>
                    <p>
                        Business stratergy
                    </p>
                    <p>
                        Portfolio
                    </p>
                </div>
            </div>
        </div>
        <p>
            copyrights, 2023 hyge limited
        </p>
    </footer>
}

export default Footer