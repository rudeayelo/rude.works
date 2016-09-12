import React from 'react'
import styles from './styles.css'
import logo from './logo.png'

const Logo = (props) =>
  <div className={ styles.logo }>
    <img src={ logo } width='249' role='presentation'/>
  </div>

export default Logo
