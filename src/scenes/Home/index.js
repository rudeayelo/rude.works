import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo'
import { WrapCenter } from 'components/Wrap'
import SocialNetworks from 'components/SocialNetworks'
import { breakpoints, font } from 'styles/config'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50vh;
  transform: translateY(-55%);
  ${breakpoints.s} {
    flex-direction: row;
  }
`
Container.displayName = 'Container'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`
Main.displayName = 'Main'

const Body = styled.div`
  ${breakpoints.sMax} {
    padding-top: 2em;
    padding-bottom: 2em;
  }
`
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
  constructor () {
    super()
    this.state = {
      status: '',
      isFetching: true,
    }
  }

  getRandomStatus = () => {
    this.setState({
      status: '',
      isFetching: false,
    })
  }

  componentDidMount () {
    this.getRandomStatus()
  }

  renderBody = () => {
    return (
      <Body>
        <IntroH1>
          <strong>Hello</strong>, my name is <strong>Rude</strong>.
        </IntroH1>
        { ' ' }
        <IntroP>
          Currently I work at XING as a <strong>frontend engineer</strong> (although
          I started my career as a <strong>graphic designer</strong>)
          { this.state.status }
          .
        </IntroP>
      </Body>
    )
  }

  render () {
    return (
      <WrapCenter>
        <Container>
          <Logo/>
          <Main>
            { this.state.isFetching
                ? <IntroP>Loading...</IntroP>
                : this.renderBody() }
            <SocialNetworks/>
          </Main>
        </Container>
      </WrapCenter>
    )
  }
}

export default Home
