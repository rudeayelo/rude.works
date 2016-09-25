import React from 'react'
import useSheet from 'react-jss'
import { breakpoints } from 'styles/config'
import logo from './logo.png'

const styles = {
  logo: {
    filter: 'drop-shadow(0 2.5em 4em rgba(0,0,0,.4))',
    [breakpoints.s]: {
      paddingRight: 3,
    },
  }
}

const Logo = (props) => {
  const { classes } = props.sheet

  return (
    <div className={ classes.logo }>
      <img src={ logo } width='249' role='presentation'/>
    </div>
  )
}

export default useSheet(Logo, styles)
