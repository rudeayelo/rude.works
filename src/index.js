import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from 'scenes/Home'
import styles from 'styles'
const { font } = styles.config

class App extends Component {
  render () {
    const cx = {
      fontFamily: font.family.sans,
    }

    return (
      <div className={cx}>
        <Home/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
