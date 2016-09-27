import React from 'react'
import injectSheet from 'styles/jss'
import styles from './styles'

const SocialNetworks = (props) => {
  const { classes } = props.sheet

  return (
    <footer className={ classes.social }>
      <span className={ classes.heading }>Find me on</span>
      <ul className={ classes.list }>
        <li className={ classes.item }>
          <a href='http://rude.at/twitter' className={ classes.link }>Twitter</a>
        </li>
        <li className={ classes.item }>
          <a href='http://rude.at/dribbble' className={ classes.link }>Dribbble</a>
        </li>
        <li className={ classes.item }>
          <a href='http://rude.at/xing' className={ classes.link }>XING</a>
        </li>
        <li className={ classes.item }>
          <a href='http://rude.at/linkedin' className={ classes.link }>Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default injectSheet(styles)(SocialNetworks)
