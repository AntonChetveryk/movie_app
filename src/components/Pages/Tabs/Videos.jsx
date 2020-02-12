import React from "react";
import CallApi from "../../../api/api";

export default class Videos extends React.Component {
  state = {
    movies: []
  };
  componentDidMount() {
    CallApi.get(`/movie/${this.props.id}/videos`, {
      params: { language: "ru-RU" }
    }).then(res => this.setState({ movies: res.results }));
  }

  render() {
    const { movies } = this.state;
    return <div>{movies.map(movie => "Hello")}</div>;
  }
}
