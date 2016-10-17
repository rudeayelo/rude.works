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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`

const Body = styled.div`
  ${breakpoints.sMax} {
    padding-top: 2em;
    padding-bottom: 2em;
  }
`

const IntroStyles = `
  display: inline;
  font-size: ${font.size.base};
  font-weight: ${font.weight.regular};
`
const Intro = styled.h1`${IntroStyles}`
const Data = styled.p`${IntroStyles}`

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
        <Intro>
          <strong>Hello</strong>, my name is <strong>Rude</strong>.
        </Intro>
        { ' ' }
        <Data>
          Currently I work at XING as a <strong>frontend engineer</strong> (although
          I started my career as a <strong>graphic designer</strong>)
          { this.state.status }
          .
        </Data>
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
                ? <Data>Loading...</Data>
                : this.renderBody() }
            <SocialNetworks/>
          </Main>
        </Container>
      </WrapCenter>
    )
  }
}

export default Home
