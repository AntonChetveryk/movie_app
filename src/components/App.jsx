import React from 'react'
import Layout from './Layout'
// import Header from './Header/Header'
import MoviesPage from './Pages/MoviesPage/MoviesPage'
import MoviePage from './Pages/MoviePage/MoviePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withAuth } from '../hoc/withAuth'

class App extends React.Component {
  componentDidMount() {
    const { auth, authActions } = this.props

    if (auth.session_id) {
      authActions.fetchAuth(auth.session_id)
    }
  }

  render() {
    const { auth } = this.props
    return (
      <Router basename="movie_app">
        <Switch>
          <Layout auth={auth}>
            <Route exact path="/" component={MoviesPage} />
            <Route path="/movie/:id" component={MoviePage} />
          </Layout>
        </Switch>
      </Router>
    )
  }
}

export default withAuth(App)
