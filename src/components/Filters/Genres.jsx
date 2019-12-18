import React from "react";

export default class Genres extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }
  render() {
    const { genres, onChangeGenres } = this.props;
    return (
      <div className="genres">
        {genres.map(genre => (
          <div key={genre.id} className="checkbox-container">
            <input
              type="checkbox"
              name={genre.name}
              id={genre.id}
              value={genre.id}
              onChange={onChangeGenres}
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
