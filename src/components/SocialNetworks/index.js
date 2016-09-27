import React from 'react'
import ReactGA from 'react-ga'
import injectSheet from 'styles/jss'
import styles from './styles'

const SocialNetworks = (props) => {
  const { classes } = props.sheet
  const socialLinks = [
    { name: 'Twitter', url: 'http://rude.at/twitter' },
    { name: 'Dribbble', url: 'http://rude.at/dribbble' },
    { name: 'XING', url: 'http://rude.at/xing' },
    { name: 'Linkedin', url: 'http://rude.at/linkedin' },
  ]

  return (
    <footer className={ classes.social }>
      <span className={ classes.heading }>Find me on</span>
      <ul className={ classes.list }>
        { socialLinks.map((link) => {
          return (
            <li key={ link.name.toLowerCase() } className={ classes.item }>
              <ReactGA.OutboundLink eventLabel={ link.name } to={ link.url }>
                { link.name }
              </ReactGA.OutboundLink>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default injectSheet(styles)(SocialNetworks)
