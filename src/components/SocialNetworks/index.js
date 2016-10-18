import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { colors, font, animations } from 'styles/config'

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
Container.displayName = 'SocialNetworksContainer'

const Heading = styled.h2`
  display: block;
  margin-bottom: 0;
  padding-top: 1.5em;
  padding-bottom: 0.55em;
  font-size: 0.8rem;
  color: ${colors.grey};
  text-transform: uppercase;
  font-weight: ${font.weight.medium};
  user-select: none;
`
Heading.displayName = 'Heading'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
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

const Link = styled(ReactGA.OutboundLink)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-weight: ${font.weight.medium};
  user-select: none;
  transition: color 400ms ${animations.default};
  &:hover {
    color: ${colors.blueDarkest};

    &::after {
      transform: translateX(200%);
      transition: transform 400ms ${animations.default};
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 100%;
    width: 100%;
    height: 2px;
    background: currentColor;
  }
`
Link.displayName = 'Link'

const SocialNetworks = (props) => {
  const socialLinks = [
    { name: 'Twitter',  url: 'http://rude.at/twitter' },
    { name: 'Dribbble', url: 'http://rude.at/dribbble' },
    { name: 'XING',     url: 'http://rude.at/xing' },
    { name: 'Linkedin', url: 'http://rude.at/linkedin' },
  ]

  return (
    <Container>
      <Heading>Find me on</Heading>
      <List>
        { socialLinks.map((link) => {
          return (
            <ListItem key={ link.name.toLowerCase() }>
              <Link eventLabel={ link.name } to={ link.url }>
                { link.name }
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default SocialNetworks
