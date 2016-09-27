import React, { PropTypes } from 'react'
import injectSheet from 'styles/jss'
import classNames from 'classnames'
import { wrap } from 'styles/config'

const styles = {
  base: {
    display: 'flex',
    paddingLeft: 2,
    paddingRight: 2,
    maxWidth: wrap.maxWidth,
  },
  center: {
    margin: '0 auto'
  }
}

const Wrap = (props) => {
  const { classes } = props.sheet
  const classList = classNames({
    [classes.base]: true,
    [classes.center]: props.center,
  })

  return (
    <div className={ classList }>
      { props.children }
    </div>
  )
}

Wrap.propTypes = {
  center: PropTypes.bool,
}
Wrap.defaultProps = {
  center: true
}

export default injectSheet(styles)(Wrap)
