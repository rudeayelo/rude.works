import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors } from 'styles/config'

const R = styled.svg`
  min-width: 9.5em;
  transform: scale(2);
  transform-origin: bottom center;
  ${breakpoints.s} {
    transform: scale(2.5);
    transform-origin: center right;
  }
  ${breakpoints.m} {
    min-width: 15.5em;
    transform: scale(3);
  }
`
R.displayName = 'R'

const RFoot = styled.path`fill: ${colors.blue};`
const RLeg = styled.path`fill: ${colors.blue};`
const RHead = styled.path`fill: ${colors.blue};`
const RIntersect = styled.path`fill: ${colors.blueDarkest};`

const Logo = (props) => {
  return (
    <R xmlns='http://www.w3.org/2000/svg' viewBox='0 0 493 479'>
      <g fill='none' fillRule='evenodd'>
        <RFoot d='M301.33 467.9a8.6 8.6 0 0 0 6.97 4.77l180.47 6.3c2.76.1 4.07-1.86 2.94-4.37L391.17 251.99a8.8 8.8 0 0 0-7.06-4.73l-175.23-6.12c-2.76-.1-4.12 1.88-3.02 4.43l95.47 222.33z'/>
        <RLeg d='M4.98 15.96a5 5 0 0 0-4.82 5.17l15.06 431.33a5 5 0 0 0 5.17 4.82l167.96-5.86a5 5 0 0 0 4.81-5.17L178.1 14.92a5 5 0 0 0-5.17-4.82L4.98 15.96z'/>
        <RHead d='M284.11 327.6H76.58a5 5 0 0 1-4.99-5V5a5 5 0 0 1 5-5H284.1c155.07 0 204.82 47.27 205.26 158.16-.44 112.68-50.2 169.44-205.26 169.44z'/>
        <RIntersect d='M415 304.73L391.16 252a8.8 8.8 0 0 0-7.06-4.73l-175.23-6.12c-2.76-.1-4.12 1.88-3.02 4.43l35.22 82.03h43.03c56.88 0 99.58-7.64 130.88-22.87zM189.01 327.6L178.1 14.92a5 5 0 0 0-5.17-4.82L71.6 13.64V322.6a5 5 0 0 0 5 5h112.43z'/>
      </g>
    </R>
  )
}

export default Logo
