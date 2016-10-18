import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { colors, font } from 'styles/config'

const Container = styled.footer`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4em;
    height: 2px;
    background: ${colors.greyLighter};
  }
`
Container.displayName = 'Container'

const Heading = styled.h2`
  display: block;
  margin-bottom: 0;
  padding-top: 1.5em;
  padding-bottom: 0.55em;
  font-size: 0.8rem;
  color: ${colors.blueDarkest};
  text-transform: uppercase;
  font-weight: ${font.weight.semibold};
`
Heading.displayName = 'Heading'

const List = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
`
List.displayName = 'List'

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1em;
`
ListItem.displayName = 'ListItem'

const SocialNetworks = (props) => {
  const socialLinks = [
    { name: 'Twitter', url: 'http://rude.at/twitter' },
    { name: 'Dribbble', url: 'http://rude.at/dribbble' },
    { name: 'XING', url: 'http://rude.at/xing' },
    { name: 'Linkedin', url: 'http://rude.at/linkedin' },
  ]

  return (
    <Container>
      <Heading>Find me on</Heading>
      <List>
        { socialLinks.map((link) => {
          return (
            <ListItem key={ link.name.toLowerCase() }>
              <ReactGA.OutboundLink eventLabel={ link.name } to={ link.url }>
                { link.name }
              </ReactGA.OutboundLink>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default SocialNetworks
