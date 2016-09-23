import React from 'react'
import logo from './logo.png'
import prefix from 'inline-style-prefixer/static'
import { breakpoints } from 'styles/config'

const cx = prefix({
  filter: 'drop-shadow(0 2.5em 4em rgba(0,0,0,.4))',
  [breakpoints.s]: {
    paddingRight: '3em',
  },
})

const Logo = (props) =>
  <div className={ cx }>
    <img src={ logo } width='249' role='presentation'/>
  </div>

export default Logo
