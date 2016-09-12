import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.css'

let cn = classNames.bind(styles);

export default class Wrap extends Component {
  static defaultProps = {
    center: true
  }
  static propTypes = {
    center: PropTypes.bool,
  }

  render () {
    const wrapClasses = cn({
      base: true,
      center: this.props.center,
    })

    return (
      <div className={ wrapClasses }>
        { this.props.children }
      </div>
    )
  }
}
