import React from 'react'
import useSheet from 'react-jss'
import styles from './styles'

const SocialNetworks = (props) => {
  const { classes } = props.sheet

  return (
    <footer className={ classes.social }>
      <span className={ classes.heading }>Find me on</span>
      <ul className={ classes.list }>
        <li className={ classes.item }>
          <a href='http://twitter.com/Rude' className={ classes.link }>Twitter</a>
        </li>
        <li className={ classes.item }>
          <a href='http://dribbble.com/Rude' className={ classes.link }>Dribbble</a>
        </li>
        <li className={ classes.item }>
          <a href='https://xing.com/profile/Rude_Ayelo' className={ classes.link }>XING</a>
        </li>
        <li className={ classes.item }>
          <a href='https://linkedin.com/in/rudeayelo' className={ classes.link }>Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default useSheet(SocialNetworks, styles)
