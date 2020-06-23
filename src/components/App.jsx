import React from 'react'

import Header from './Header/Header'
import MoviesPage from './Pages/MoviesPage/MoviesPage'
import MoviePage from './Pages/MoviePage/MoviePage'
import { BrowserRouter, Route } from 'react-router-dom'
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
      <BrowserRouter basename="movie_app">
        <div>
          <Header user={auth.user} />
          <Route exact path="/" component={MoviesPage} />
          <Route path="/movie/:id" component={MoviePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default withAuth(App)
