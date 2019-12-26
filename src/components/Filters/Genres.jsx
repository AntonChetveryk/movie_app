import React from "react";
import { API_KEY_3 } from "../../api/api";

export default class Genres extends React.Component {
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

    return (
      <div className="genres">
        {genres.map(genre => (
          <div key={genre.id} className="checkbox-container">
            <input
              type="checkbox"
              name={genre.name}
              id={genre.id}
              value={genre.id}
              onChange={this.onChangeGenres}
              checked={this.props.with_genres.includes(String(genre.id))}
            />
            <label htmlFor={genre.id} className="ml-2">
              {genre.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
