import React from "react";
import CallApi from "../../../api/api";
import Tabs from "./Tabs/Tabs";
import MovieInfo from "./Tabs/MovieInfo";

export default class MoviePage extends React.Component {
  state = {
    movie: {}
  };
  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ movie: res }));
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        <MovieInfo movie={movie} />
        <Tabs movie={movie} />
      </div>
    );
  }
}
