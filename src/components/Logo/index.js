import React from 'react'
import injectSheet from 'styles/jss'
import { breakpoints, colors } from 'styles/config'

const styles = {
  logo: {
    textAlign: 'center',
    [breakpoints.s]: {
      paddingRight: 3,
    },
  },
  img: {
    transform: 'scale(2.5)',
    transformOrigin: 'bottom center',
    [breakpoints.m]: {
      transform: 'scale(3)',
      transformOrigin: 'center right',
    },
  },
  RHead: {
    mixBlendMode: 'difference',
  },
  RLeg: {},
  RFoot: {},
}

const Logo = (props) => {
  const { classes } = props.sheet

  return (
    <div className={ classes.logo }>
      <svg className={ classes.img } xmlns='http://www.w3.org/2000/svg' width='250' viewBox='0 0 493 478' role='presentation'>
        <g fill={ colors.blue } fillRule='evenodd'>
          <path className={ classes.RFoot } d='M301.35 466.96a8.53 8.53 0 0 0 6.9 4.72L488.83 478c2.74.1 4.04-1.84 2.9-4.34L391.16 251.44a8.72 8.72 0 0 0-7-4.69l-175.32-6.12c-2.74-.1-4.08 1.86-3 4.38l95.52 221.95z'/>
          <path className={ classes.RLeg } d='M4.95 15.94a4.95 4.95 0 0 0-4.77 5.12l15.03 430.5a4.95 4.95 0 0 0 5.12 4.78l168.05-5.87a4.95 4.95 0 0 0 4.77-5.12l-15.03-430.5a4.95 4.95 0 0 0-5.12-4.78L4.95 15.94z'/>
          <path className={ classes.RHead } d='M284.11 326.92H76.55a4.95 4.95 0 0 1-4.96-4.96v-317C71.6 2.22 73.8 0 76.55 0H284.1c155.07 0 204.82 47.17 205.26 157.83-.44 112.44-50.2 169.09-205.26 169.09z'/>
        </g>
      </svg>
    </div>
  )
}

export default injectSheet(styles)(Logo)
