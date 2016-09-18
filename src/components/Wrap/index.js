import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles'

export default class Wrap extends Component {
  static propTypes = {
    center: PropTypes.bool,
  }
  static defaultProps = {
    center: true
  }

  render () {
    const wrapClasses = classNames({
      [styles.base]: true,
      [styles.center]: this.props.center,
    })

    return (
      <div className={ styles }>
        { this.props.children }
      </div>
    )
  }
}
