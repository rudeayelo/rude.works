import React, { Component } from 'react'
import Logo from 'components/Logo'
import Wrap from 'components/Wrap'
import SocialNetworks from 'components/SocialNetworks'
import content from 'services/Contentful'
import styles from './styles'

class Home extends Component {
  state = {
    isFetching: true,
    status: '',
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
    return (
      <div className={ styles.body }>
        <h1 className={ styles.intro }>
          <strong>Hello</strong>, my name is <strong>Rude</strong>.
        </h1>
        { ' ' }
        <p className={ styles.data }>
          I work at XING as a <strong>frontend engineer</strong> (although
          I've spent more time working as a <strong>graphic designer</strong>)
          { this.state.status }
          .
        </p>
      </div>
    )
  }

  render () {
    return (
      <Wrap>
        <div className={ styles.content }>
          <Logo/>

          <div className={ styles.main }>
            { this.state.isFetching
                ? <span className='data'>Loading...</span>
                : this.renderBody() }

            <SocialNetworks/>
          </div>
        </div>
      </Wrap>
    )
  }
}

export default Home
