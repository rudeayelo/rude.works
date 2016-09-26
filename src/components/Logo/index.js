import React from 'react'
import injectSheet from 'styles/jss'
import { breakpoints, colors } from 'styles/config'

const styles = {
  container: {
    textAlign: 'center',
    [breakpoints.s]: {
      paddingRight: 3,
    },
  },
  logo: {
    transform: 'scale(2.5)',
    transformOrigin: 'bottom center',
    [breakpoints.m]: {
      transform: 'scale(3)',
      transformOrigin: 'center right',
    },
  },
  RHead: {
    // mixBlendMode: 'difference',
  },
  RLeg: {},
  RFoot: {},
  RIntersect: {
    // display: 'none',
  },
}

const Logo = (props) => {
  const { classes } = props.sheet

  return (
    <div className={ classes.container }>
      <svg className={ classes.logo } width='250' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 493 479'>
        <g fill='none' fillRule='evenodd'>
          <path className={ classes.RFoot } fill={ colors.blue } d='M301.33 467.9a8.6 8.6 0 0 0 6.97 4.77l180.47 6.3c2.76.1 4.07-1.86 2.94-4.37L391.17 251.99a8.8 8.8 0 0 0-7.06-4.73l-175.23-6.12c-2.76-.1-4.12 1.88-3.02 4.43l95.47 222.33z'/>
          <path className={ classes.RLeg } fill={ colors.blue } d='M4.98 15.96a5 5 0 0 0-4.82 5.17l15.06 431.33a5 5 0 0 0 5.17 4.82l167.96-5.86a5 5 0 0 0 4.81-5.17L178.1 14.92a5 5 0 0 0-5.17-4.82L4.98 15.96z'/>
          <path className={ classes.RHead } fill={ colors.blue } d='M284.11 327.6H76.58a5 5 0 0 1-4.99-5V5a5 5 0 0 1 5-5H284.1c155.07 0 204.82 47.27 205.26 158.16-.44 112.68-50.2 169.44-205.26 169.44z'/>
          <path className={ classes.RIntersect } fill={ colors.blueDarkest } d='M415 304.73L391.16 252a8.8 8.8 0 0 0-7.06-4.73l-175.23-6.12c-2.76-.1-4.12 1.88-3.02 4.43l35.22 82.03h43.03c56.88 0 99.58-7.64 130.88-22.87zM189.01 327.6L178.1 14.92a5 5 0 0 0-5.17-4.82L71.6 13.64V322.6a5 5 0 0 0 5 5h112.43z'/>
        </g>
      </svg>
    </div>
  )
}

export default injectSheet(styles)(Logo)
