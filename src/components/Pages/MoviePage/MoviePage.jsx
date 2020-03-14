import React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from "reactstrap";
import Loader from "../../UI/Loader";

import CallApi from "../../../api/api";
import MovieInfo from "./Tabs/MovieInfo";
import Detail from "./Tabs/Detail";
import Videos from "./Tabs/Videos";
import Credits from "./Tabs/Credits";
import Navigation from "./Tabs/Navigation";

export default class MoviePage extends React.Component {
  state = {
    movie: {},
    isLoading: false
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    CallApi.get(`/movie/${this.props.match.params.id}`, {
      params: { language: "ru-RU" }
    }).then(response => this.setState({ movie: response, isLoading: false }));
  }

  render() {
    const { movie, isLoading } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <MovieInfo movie={movie} />
            <Navigation />
            <Row>
              <Col sm="12">
                <Switch>
                  <Route
                    exact
                    path="/movie/:id"
                    render={routerProps => (
                      <Detail {...routerProps} movie={movie} />
                    )}
                  ></Route>
                  <Route exact path="/movie/:id/videos" component={Videos} />
                  <Route exact path="/movie/:id/credits" component={Credits} />
                </Switch>
              </Col>
            </Row>
          </>
        )}
      </div>
    );
  }
}
