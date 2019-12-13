import React from "react";

export default class SortByYears extends React.Component {
  getYears = (from, to) => {
    let years = [];
    for (let i = from; i <= to; i++) {
      years.push(i);
    }
    return years;
  };

  render() {
    const { primary_release_year, onChangeFilters } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="primary_release_year">Сортировать по году:</label>
        <select
          className="form-control"
          value={primary_release_year}
          onChange={onChangeFilters}
          id="primary_release_year"
          name="primary_release_year"
        >
          {this.getYears(1950, 2025).map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
