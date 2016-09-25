import React, { Component } from 'react'
import injectSheet from 'styles/jss'
import Logo from 'components/Logo'
import Wrap from 'components/Wrap'
import SocialNetworks from 'components/SocialNetworks'
import styles from './styles'

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
    const { classes } = this.props.sheet

    return (
      <div className={ classes.body }>
        <h1 className={ classes.intro }>
          <strong>Hello</strong>, my name is <strong>Rude</strong>.
        </h1>
        { ' ' }
        <p className={ classes.data }>
          Currently I work at XING as a <strong>frontend engineer</strong> (although
          I did start my career as a <strong>graphic designer</strong>)
          { this.state.status }
          .
        </p>
      </div>
    )
  }

  render () {
    const { classes } = this.props.sheet

    return (
      <Wrap>
        <div className={ classes.content }>
          <Logo/>

          <div className={ classes.main }>
            { this.state.isFetching
                ? <span className={ classes.data }>Loading...</span>
                : this.renderBody() }

            <SocialNetworks/>
          </div>
        </div>
      </Wrap>
    )
  }
}

export default injectSheet(styles)(Home)
