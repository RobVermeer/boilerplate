import React from 'react'
import { Global, css } from '@emotion/react'

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.15;
  }

  h1 {
    font-size: 4rem;
  }

  * {
    box-sizing: border-box;
  }
`

const BaseStyles = () => {
  return <Global styles={[styles]} />
}

export default BaseStyles
