import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { repo } from './lib/ipfs'

const renderApp = (Component) => {
  ReactDOM.render(
    <Component repo={repo} />,
    document.getElementById('app')
  )
}

renderApp(Routes)
