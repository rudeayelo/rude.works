import React from 'react'
import styles from './styles'

const SocialNetworks = (props) => {
  return (
    <footer className={ styles.social }>
      <span className={ styles.heading }>Find me on</span>
      <ul className={ styles.list }>
        <li className={ styles.item }>
          <a href='http://twitter.com/Rude' className={ styles.link }>Twitter</a>
        </li>
        <li className={ styles.item }>
          <a href='http://dribbble.com/Rude' className={ styles.link }>Dribbble</a>
        </li>
        <li className={ styles.item }>
          <a href='https://xing.com/profile/Rude_Ayelo' className={ styles.link }>XING</a>
        </li>
        <li className={ styles.item }>
          <a href='https://linkedin.com/in/rudeayelo' className={ styles.link }>Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default SocialNetworks
