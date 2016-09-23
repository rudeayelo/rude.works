import React, { Component, PropTypes } from 'react'
import prefix from 'inline-style-prefixer/static'
import { wrap } from 'styles/config'

export default class Wrap extends Component {
  render () {
    const cx = prefix({
      display: 'flex',
      paddingLeft: '2em',
      paddingRight: '2em',
      maxWidth: wrap.maxWidth,
    })
    const center = this.props.center && { margin: '0 auto' }
    const sx = {
      ...center,
    }

    return (
      <div className={ cx } style={ sx }>
        { this.props.children }
      </div>
    )
  }
}

Wrap.propTypes = {
  center: PropTypes.bool,
}
Wrap.defaultProps = {
  center: true
}
