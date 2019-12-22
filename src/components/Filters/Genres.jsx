import React from "react";

export default class Genres extends React.Component {
  //   componentDidUpdate(prevProps) {
  //     console.log(prevProps);
  //   }

  onChangeGenres = event => {
    //console.log(event.target.checked);
    const { with_genres } = this.props;
    const id = event.target.value;
    let newGenres = [];

    if (event.target.checked) {
      newGenres = [...with_genres, id];
      console.log("Checked " + newGenres);
    } else {
      newGenres = with_genres.filter(el => el !== id);
      console.log("notChecked " + newGenres);
    }

    this.props.onChangeFilters(event, newGenres);
  };

  render() {
    const { genres } = this.props;
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
