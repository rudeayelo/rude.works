import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Logo from 'components/Logo'
import SocialNetworks from 'components/SocialNetworks'
import { breakpoints, font, layout } from 'styles/config'

injectGlobal`
  #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    overflow: hidden;
    ${breakpoints.s} {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${layout.padding};
  padding-right: ${layout.padding};
  ${breakpoints.s} {
    flex-direction: row;
    max-width: ${layout.maxWidth};
  }
`
Container.displayName = 'HomeContainer'

const LogoContainer = styled.div`
  text-align: center;
  ${breakpoints.sMax} {
    padding-bottom: 2em;
  }
  ${breakpoints.s} {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 3em;
  }
`
LogoContainer.displayName = 'LogoContainer'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`
Main.displayName = 'Main'

const Body = styled.div` padding-bottom: 2em; `
Body.displayName = 'Body'

const IntroStyles = `
  display: inline;
  font-size: ${font.size.base};
  font-weight: ${font.weight.regular};
`
const IntroH1 = styled.h1`${IntroStyles}`
const IntroP = styled.p`${IntroStyles}`
IntroH1.displayName = 'IntroH1'
IntroP.displayName = 'IntroP'

class Home extends Component {
  renderBody = () => {
    return (
      <Body>
        <IntroH1>
          <strong>Hi</strong>, my name is <strong>Rude</strong>.
        </IntroH1>
        { ' ' }
        <IntroP>
          Currently I'm working as a <strong>frontend engineer</strong> at XING (although
          I started my career as a <strong>graphic designer</strong>).
        </IntroP>
      </Body>
    )
  }

  render () {
    return (
      <Container>
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        <Main>
          { this.renderBody() }
          <SocialNetworks/>
        </Main>
      </Container>
    )
  }
}

export default Home
