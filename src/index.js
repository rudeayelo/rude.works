import React from 'react'
import ReactDOM from 'react-dom'
import Analytics from 'react-ga'
import 'styles'
import Home from 'scenes/Home'

Analytics.initialize('UA-264378-1', { debug: false })
Analytics.set({ page: window.location.pathname })
Analytics.pageview(window.location.pathname)

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
)
