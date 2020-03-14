import React from "react";
import { API_KEY_3 } from "../../api/api";
import Genres from "./Genres";

export default class GenresContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      genres: []
    };
  }

  getGenres = () => {
    const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          genres: data.genres
        });
      });
  };

  componentDidMount() {
    this.getGenres();
  }

  onChangeGenres = event => {
    const { with_genres } = this.props;
    const { value, checked } = event.target;

    this.props.onChangeFilters({
      target: {
        name: "with_genres",
        value: checked
          ? [...with_genres, value]
          : with_genres.filter(el => el !== value)
      }
    });
  };

  render() {
    const { genres } = this.state;
    const { with_genres } = this.props;
    return (
      <Genres
        genres={genres}
        onChangeGenres={this.onChangeGenres}
        with_genres={with_genres}
      />
    );
  }
}
