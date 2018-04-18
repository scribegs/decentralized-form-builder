import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './layout'
import Welcome from './welcome'
import UserRegistration from './users/register'

const Routes = props => (
  <Router>
    <Layout>
      <Route
        exact
        path='/'
        render={routerProps => <Welcome {...routerProps} {...props} />}
      />

      <Route
        exact
        path='/registration'
        render={routerProps => <UserRegistration {...routerProps} {...props} />}
      />
    </Layout>
  </Router>
)

export default Routes
