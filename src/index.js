import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import 'styles'
import Home from 'scenes/Home'

ReactGA.initialize('UA-264378-1', { debug: false })
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
)
