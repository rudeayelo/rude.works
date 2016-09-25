import React, { Component } from 'react'
import injectSheet from 'styles/jss'
import Logo from 'components/Logo'
import Wrap from 'components/Wrap'
import SocialNetworks from 'components/SocialNetworks'
import content from 'services/Contentful'
import styles from './styles'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: true,
      status: '',
    }
  }

  getRandomStatus = () => {
    content.getEntries({
      content_type: 'state',
      order: '-sys.createdAt',
      limit: 3,
    })
    .then((entries) => {
      const entryRand = Math.floor(Math.random() * 3)
      const entry = entries.items[entryRand]

      this.setState({
        status: ` ${entry.fields.content}`,
        isFetching: false,
      })
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
          I work at XING as a <strong>frontend engineer</strong> (although
          I've spent more time working as a <strong>graphic designer</strong>)
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
