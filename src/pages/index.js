/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import GlobalStyles from "../styles/globalStyles"
import Hero from "../components/landing/hero"
import Offering from "../components/landing/offering"
import Agency from "../components/landing/agency"
import Solution from "../components/landing/solution"
import Footer from "../components/common/footer"
import Main from "../components/newChanges/Main"
import Business from "../components/newChanges/Business"
import WhyChooseUs from "../components/newChanges/WhyChooseUs/WhyChooseUs"

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <div sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Main />
        <Business />
        <WhyChooseUs />
        {/* <Hero /> */}
        <Offering />
        <Agency />
        {/* <Solution /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
