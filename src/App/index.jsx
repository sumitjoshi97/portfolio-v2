import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './Routes'

// import './index.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <route.component />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </Router>
    )
  }
}
