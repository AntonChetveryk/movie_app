import React from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from "reactstrap";

import CallApi from "../../../api/api";
import MovieInfo from "./Tabs/MovieInfo";
import Spinner from "../../../img/spinner.gif";
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
    }).then(res => this.setState({ movie: res, isLoading: false }));
  }
  render() {
    const { movie, isLoading } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <img src={Spinner} alt="loading" className="loading" />
        ) : (
          <>
            <MovieInfo movie={movie} />
            <Navigation movie={movie} />
            <Row>
              <Col sm="12">
                <Switch>
                  <Route exact path="/movie/:id">
                    <Detail movie={movie} />
                  </Route>
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
