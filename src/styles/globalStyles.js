import React from 'react'
import { Global } from '@emotion/react'

export default (props) => (
  <Global
    styles={(theme) => ({
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins'
      },
    })}
  />
)